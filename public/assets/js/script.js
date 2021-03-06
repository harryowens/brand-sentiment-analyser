function enableAnalysis() {
    document.getElementById("analyse-button").disabled = false;
}

function createListItem(itemText) {

    let element = document.createElement('li');
    // Give the item a unique ID - source: https://gist.github.com/gordonbrander/2230317
    const id = Math.random().toString(36).substr(2, 9);
    element.id = id;
    element.className = 'list-item';
    element.innerHTML = `
        <span>${itemText}</span>
        <i class="fas fa-plus-circle add-to-research" onclick="addToResearch(this);"></i>
    `;
    return element;

}

async function analyseSearches() {
    // avoid repeat search for the same seed by disabling analyse button 
    document.getElementById("analyse-button").disabled = true;

    // clear lists 
    ['top-searches', 'questions', 'competitors', 'concerns'].forEach(x => {
        document.getElementById(`${x}-list`).innerHTML = '';
        document.getElementById(`loading-${x}`).style.removeProperty('display');
    });

    // show the results area - max-height is used to allow an animated transition
    // maxHeight can be any value greater than the largest possible area as the
    // area will shrink to the size of its contents
    document.getElementById("results-area").style.maxHeight = "3000px";

    const seed = document.getElementById("seed-input").value;
    const topSearches = await fetch(`../top/${seed}`)
        .then(response => response.json()); // chain instead of await to avoid multiple variables
    const questions = await fetch(`../questions/${seed}`)
        .then(response => response.json());
    const competitors = await fetch(`../competitors/${seed}`)
        .then(response => response.json());
    const concerns = await fetch(`../concerns/${seed}`)
        .then(response => response.json());
    // populate each list individually, asynchronously
    populateResultsList('top-searches', topSearches);
    populateResultsList('questions', questions);
    populateResultsList('competitors', competitors);
    populateResultsList('concerns', concerns);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');

    if (results.length > 0) {
        results.forEach((result) => {
            resultsList.appendChild(createListItem(result));
        });
    }
    else {
        let noResultsItem = createListItem('No results found');
        // delete the add to research list button
        noResultsItem.getElementsByTagName('i')[0].remove();
        noResultsItem.classList.add('no-results-item');
        resultsList.appendChild(noResultsItem);
    }

    // hide the loading animation in the box header
    document.getElementById(`loading-${listName}`).style.display = 'none';
}

// time delay function that can be awaited in a loop
// source: https://stackoverflow.com/a/44476626/726221
const timeDelay = ms => new Promise(resolve => setTimeout(resolve, ms));

// function is async so we can await the time delay (specified in ms)
async function typewriterText(target, textStrings, charDelay) {

    // span that the text will be inserted into / removed from
    const targetNode = document.getElementById(target);

    // Run on a continuous loop
    while (true) {

        for (let i = 0; i <= (textStrings.length - 1); i++) {

            // remove any existing characters one-by-one, with a delay between each
            const existingText = targetNode.textContent;
            for (let x = 0; x <= existingText.length; x++) {
                targetNode.textContent = existingText.substring(0, existingText.length - x);
                await timeDelay(charDelay);
            }

            // add the characters in the string one-by-one
            for (let y = 0; y <= textStrings[i].length; y++) {
                targetNode.textContent = textStrings[i].substring(0, y);
                await timeDelay(charDelay);
            }

            // pause while the full brand is displayed
            await timeDelay(3000);
        }

        // pause longer on the last item ("your brand")
        await timeDelay(3000);
    }
}

function alternateBrandSuggestions() {

    const brands = [
        'Starbucks',
        'Peloton',
        'Playstation',
        'Greggs',
        'Amazon',
        'Coca Cola',
        'your brand'
    ];
    typewriterText('title-search-seed', brands, 50);
}

function addToResearch(e) {
    const itemID = e.parentNode.id;
    let newItem = document.createElement('ul');
    // true means deep clone the list item - i.e. get the elements within it too
    let newNode = document.getElementById(itemID).cloneNode(true);
    // get the icon element in the list item
    let iconNode = newNode.getElementsByTagName("i")[0];
    // remove the add to research button
    iconNode.classList.remove("fa-plus-circle");
    iconNode.classList.remove("add-to-research");
    iconNode.removeAttribute("onclick");
    // add an open in new tab icon
    iconNode.classList.add("fa-external-link-alt");
    iconNode.classList.add("external-search");
    // create a link element to wrap the open in new tab icon
    let linkNode = document.createElement('a');
    linkNode.setAttribute("target", "_blank");
    linkNode.setAttribute("href",
        `https://google.com/search?q=${newNode.getElementsByTagName("span")[0].textContent}`
    );
    // wrap the link icon in the new link element
    linkNode.appendChild(iconNode);
    newNode.appendChild(linkNode);
    // remove item from origin list
    document.getElementById(itemID).remove();
    // append the item to the research list as the last item before the instruction item
    newItem.appendChild(newNode);
    let targetList = document.getElementById("further-research-body");
    targetList.insertBefore(newItem, document.getElementById("further-research-instruction-item"));

}

function toggleList(toggle, listName) {
    // only the body section is expanded or collapsed
    let listBody = document.getElementById(`${listName}-body`);
    if (toggle.classList.contains('expanded')) {
        listBody.style.maxHeight = "0"; // must be larger than max. possible height of list
        toggle.classList.remove('expanded');
    }
    else {
        listBody.style.maxHeight = "1000px"; // must be larger than max. possible height of list
        toggle.classList.add('expanded');
    }
}

// Run analysis enter is pressed (rather than clicking "Analyse")
// Derived from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// with modifications for deprecated properties
var input = document.getElementById("seed-input"); // search seed box
input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      // Cancel the default action for the "Enter" key
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("analyse-button").click();
    }
  }); 