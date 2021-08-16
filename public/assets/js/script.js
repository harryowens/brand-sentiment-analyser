// hardcoded results for testing population of lists
async function analyseSearches() {
    const topSearchesResponse = await fetch('../top/playstation');
    const topSearches = await topSearchesResponse.json();
    console.log(topSearches);
    populateResultsList('top-searches', topSearches);
}

function populateResultsList(listName, results) {
    const resultsList = document.getElementById(listName + '-list');
    
    results.forEach((result, i) => {
        const resultElement = resultsList.children[i];
        // results box is hidden (display=none) by default
        resultElement.style.display = "flex";
        // getElementsByTagName returns an array, so take the first span since this
        // should always be the current (empty) result text
        const span = resultElement.getElementsByTagName('span')[0];
        const resultText = document.createTextNode(result);
        
        // remove any existing text from the span
        while( span.firstChild ) {
            span.removeChild( span.firstChild );
        }
        span.appendChild(resultText);
    });
}