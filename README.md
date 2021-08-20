# Brand Sentiment Analyser

The Brand Sentiment Analyser (BSA) allows marketers, brand owners, customers or anyone else with an interest in a particular brand to find out the top search terms related to that brand, the brand's main competitors, topical questions about the brand, and concerns about the brand that users may have.

BSA is heavily influenced by [Answer The Public](https://answerthepublic.com), and while similar, it is not intended to be a clone of that service. Answer The Public presents users with graphical depictions of search terms, while this tool presents a list of terms that enables further research.

## Features 

- __Heading__

  - Featured at the top of the site, the heading makes clear the benefit to the user: understanding what people are asking about a particular brand.

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Background image__

  - The background image takes up the majority of the screen on initial page load, showing a crowd of people towards the bottom of the screen, to let the user know that the tool helps them to understand what people collectively are searching for in relation to a brand.

  ![Hero image screenshot](assets/screenshots/screen_hero.png "Hero")

- __Rotating search seed suggestions__

  - The rotating suggestions within the heading highlight that the user can input any brand they wish, whether it is their own or a brand they are interested in.
  - The "typewriter" effect on the suggested brands rotation emphasises that the user can enter these brands, or any other, as a search seed to get results.

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Call to action__

  - Immediately below the heading and seed suggestions, there is a clear call to action, asking the user to enter a search seed to get results.
  - The placeholder text within the seed input box 

  ![Navbar screenshot](assets/screenshots/screen_navbar.png "Navbar")

- __Search seed input and Analyse button__

  - The search seed input box has a placeholder to give the user a prompt to enter a brand.
  - Placeholder text tells the user to use a maximum of 2 words; while more than 2 will not cause an error, it will likely reduce the number of results and be less effective. For this reason, the user gets a prompt, but the limit is not enforced.

  ![Hero image screenshot](assets/screenshots/screen_hero.png "Hero")

- __Results area__

  - The results area lays out the top search suggestions for the user separated into 4 categories: Top searches, questions, competitors and concerns
  - All results are derived from Google's autocomplete suggestions API
  - The results area is hidden initially to direct the user to complete the seed input first

  ![Benefits section screenshot](assets/screenshots/screen_benefits.png "Benefits")

- __Loading animation__

  - The user is reassured that the system is calculating the results by presenting a loading animation on each results box until the query to the server is finished
  - Each loading animation is independently controlled, in case the timing of the queries resolving is not synced

  ![Checklist screenshot](assets/screenshots/screen_checklist.png "Checklist")

- __Help tooltips__

  - The user can see the purpose of each results list by hovering over (or touching on mobile) the "?" icon

  ![Class picks screenshot](assets/screenshots/screen_picks.png "Class picks")

- __Top searches__ 

  - This list presents the top search suggestions - i.e. the most common search terms that Google expects people to search for given the seed term that the user provided 

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Questions__ 

  - The most common search terms that include the words "what" or "which" that Google expects people to search for given the provided seed

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Competitors__ 

  - Brands and/or products that compete with the brand the user has selected, based on search suggestions containing the seed brand and "vs", i.e. brands or products that people often compare.

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Concerns__ 

  - Common search terms that include the words "bad" or "help" - usually these are related to concerns about the brand or product.

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

- __Further research__ 

  - The user may wish to research some of the results further by doing a Google search for that term; adding items to the further research list allows them to do this
  - The further research list saves items across multiple analysis sessions - e.g. if a user enters the seed "Macbook" and saves a term from the top searches list, the saved term will be retained there to allow the user to enter a new seed, e.g. "HP Spectre" and also saves an item from the results of that analysis, both saved terms will be available for further analysis.

  ![Footer screenshot](assets/screenshots/screen_footer.png "Footer")

### Features Left to Implement

- __Delete item from results list__

  - Items can not currently be deleted from results list, e.g. if they are unrelated to the brand search
  - While it would be trivial to allow a user to delete individual list items, these would not persist across sessions without considerable additional infrastructure to maintain state, so I opted not to include a delete button to avoid user frustration

- __Animation when adding item to further research list__

  - It would be helpful to show the items moving from the results list to the further research list; presently, the item simply disappears from the results list and appears in the further research list, which has the potential to confuse the user or make them think the item was deleted instead of moved.
  - This kind of animation is relatively straightforward with a component-based framework, but I view it as beyond the scope of this vanilla JS project given the difficulty of implementation.

- __Background video__

  - The background is highly visible on initial page load and replacing with a video may enhance visual appeal

- __Automated testing__

  - The testing checklists shown in this document could be automated and run as unit or end-to-end tests as part of the CI / build process

- __Region selection__

  - Autocomplete suggestions differ according to where they're obtained from geographically; currently, all suggestions are obtained from AWS servers in the US and are thus US-specific.

## Testing 

### Visual

- __Header__

    - [x] Is visible on page load
    - [x] Is formatted as intended across desktop, tablet and mobile screen sizes

- __Background image__

    - [x] Shown on all tested devices (desktop, mobile and tablet)
    - [x] Covers the full size of the page
    - [x] Remains fixed in position on scroll
    - [x] Is "dimmed" with an overlay to ensure good text contrast
    - [x] Is dimmed more towards the top of the page

- __Results area__

    - [x] Hidden on page load
    - [x] Shown when analysis begins

### Input

- __Search seed__

    - [x] Input box has placeholder text advising user to enter max. 2 words
    - [x] More than two words can be entered (i.e. limit is a guide but not enforced)

### Links and buttons

- __Analyse button__

    - [x] Initially disabled
    - [x] Enabled when text is entered into the search seed input
    - [x] Runs the analysis when clicked, or when Enter is pressed while the search seed input has focus
    - [x] Re-disabled when the analysis is run (prevents duplicate query)
    - [x] Re-enabled when the search seed input text is changed by the user
    - [x] Greyed out while disabled
    - [x] Highlighted and clickable while enabled
    - [x] Formatted as intended on all screen sizes

- __Add to further research buttons__

    - [x] Shown beside each list item in results lists
    - [x] Positioned and formatted as intended
    - [x] Shows a pointer cursor on hover
    - [x] Moves the item to the further research list when clicked
    - [x] Not shown beside items in the further research list

- __External search buttons__

    - [x] Shown beside each list item in further research list
    - [x] Opens a Google search for the item in a new tab
    - [x] Formatted as intended on all screen sizes

- __Help buttons__

    - [x] Shown in the header of each results list
    - [x] Show a tooltip text box describing the purpose of the results list on hover (desktop) or when active (i.e. touched - mobile / touchscreen)
    - [x] Hide the tooltip when not hovered or active
    - [x] Formatted as intended on all screen sizes

- __Expand / collapse further research list button__

    - [x] Shown in header of further research box
    - [x] Expands the further research box on click (when collapsed)
    - [x] Rotates to become a "collapse" button when list is expanded
    - [x] Collapses the further research box on click (when expanded)
    - [x] Formatted as intended on all screen sizes

### Animations

- __Search seed suggestions__

    - [x] Shows suggested brands in sequence
    - [x] Removes and adds letters individually when changing between suggestions
    - [x] Pauses for 3s after each brand suggestion is shown
    - [x] Pauses for 6s on "your brand" suggestion
    - [x] Runs continuously on an infinite loop
    - [x] Runs asynchronously and does not block UI
    - [x] Reduces in size on smaller screens
    - [x] Does not wrap to second line on any tested screen size

- __Reveal results area__

    - [x] Smoothly expands to reveal results boxes when "Analyse" is clicked
    - [x] Removes and adds letters individually when changing between suggestions
    - [x] Pauses for 3s after each brand suggestion is shown
    - [x] Pauses for 6s on "your brand" suggestion

- __Results loading animation__

    - [x] Shown in the header of each results list when "Analyse" is clicked
    - [x] Remains visible while the API call is in progress
    - [x] Hidden when the API call completes (whether there are results to show or not)
    - [x] Animated (shows rotating circle of dots) on all platforms tested

- __Expand / collapse further research list__

    - [x] List box smoothly expands to reveal list items when chevron icon is clicked
    - [x] Chevron icon rotates smoothly through 180 degrees when list is expanded or collapsed

### Results

- __Layout__

    - [x] Results lists are arranged in a grid on tablet / desktop
    - [x] Lists are stacked vertically on mobile
    - [x] Grid or vertical stack covers the full width of the screen (except extremely large screens)
    - [x] List widths resize to fill available space
    - [x] Lists have equal height within rows
    - [x] List items cover the width of the list (with margins)
    - [x] List items are stacked vertically
    - [x] Lists reduce in height when items are removed from all lists in a row on desktop / tablet
    - [x] Lists reduce in height when items are removed from any list on mobile

- __Top searches__

    - [x] Initially blank
    - [x] Shows top search term suggestions based on the user's seed
    - [x] Displays a maximum of 5 results
    - [x] Results do not wrap to multiple lines
    - [x] Long result text is truncated with an elipsis ("...") to avoid wrapping
    - [x] Items are removed when sent to the further research list
    - [ ] Shows a "no results" placeholder if there are no appropriate search suggestions (e.g. if user specifies inappropriate / adult search seeds)

- __Questions__

    - [x] Initially blank
    - [x] Shows search term suggestions containing "which" or "what" based on the user's seed
    - [x] Displays a maximum of 5 results
    - [x] Results do not wrap to multiple lines
    - [x] Long result text is truncated with an elipsis ("...") to avoid wrapping
    - [x] Items are removed when sent to the further research list
    - [ ] Shows a "no results" placeholder if there are no appropriate search suggestions (e.g. if user specifies inappropriate / adult search seeds)

- __Competitors__

    - [x] Initially blank
    - [x] Shows search term suggestions containing "vs" with the user's seed and "vs" removed from the result
    - [x] Displays a maximum of 5 results
    - [x] Results do not wrap to multiple lines
    - [x] Long result text is truncated with an elipsis ("...") to avoid wrapping
    - [x] Items are removed when sent to the further research list
    - [ ] Shows a "no results" placeholder if there are no appropriate search suggestions (e.g. if user specifies inappropriate / adult search seeds)

- __Concerns__

    - [x] Initially blank
    - [x] Shows search term suggestions containing "bad" or "help" along with the user's specified search seed
    - [x] Displays a maximum of 5 results
    - [x] Results do not wrap to multiple lines
    - [x] Long result text is truncated with an elipsis ("...") to avoid wrapping
    - [x] Items are removed when sent to the further research list
    - [ ] Shows a "no results" placeholder if there are no appropriate search suggestions (e.g. if user specifies inappropriate / adult search seeds)

- __Further research__

    - [x] Initially contains only a single instruction placeholder
    - [x] Shows items added by the user by clicking the "+" icon on a results list item
    - [x] No limit to number of results in the list
    - [x] Area spans full width of the page (with margins)
    - [x] Long result text is truncated with an elipsis ("...") to avoid wrapping
    - [x] All items (except initial instruction placeholder) have an "external link" icon
    - [x] Clicking "external link" icon performs a Google search for the (non-truncated) search term in a new tab
    - [x] Items are retained in the list across analysis sessions (i.e. when user enters a new seed and clicks "Analyse")

### Responsiveness

The site displays well across a variety of screensizes and devices, tested using Firefox Developer Tools and also by opening the site an a laptop, tablet and phone to confirm. The specific checklist items for each feature detail the testing on each screensize.

### Cross-browser

I have tested cross-browser support by viewing the site in Firefox, Chrome and Safari on MacOS, and also Chrome and Safari on iOS. As noted in the CSS validator testing section of this readme, Safari on iOS does not support the `text-decoration-skip-ink` property, so the rotating seed suggestions in the header are slightly less readable, but otherwise no significant differences were observed.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fharryowens.github.io%2FSpin-expert%2F)
- CSS
  - 3 errors were noteed by the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fharryowens.github.io%2FSpin-expert%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en), relating to 3 uses of two properties that do not exist according to the validator. These errors directly conflict with good browser support for these tags across all common platforms; Can I Use notes that `text-decoration-thickness` is supported by the browser for over 88% of users, while more than 75% of users have support for `text-decoration-skip-ink` (the major difference with the latter being no support on Safari for iOS, which is ~10% of users).
  - As these properties enhance the readability of the text in the rotating search suggestions and also improve the visual hierarchy, I have opted not to remove them despite the validator errors, noting that I have been unable to find any suitable alternative property to replace them with. On browsers without support for `text-decoration-skip-ink`, the text will be slightly less readable as characters descending below the line will merge with the underline, while browsers without support for `text-decoration-thickness` will have a thinner underline that emphasises the suggestions less, but is no less readable.

### Observations / learning points

- __Animation when adding item to further research list__

    - Lorem ipsum

### Unfixed Bugs

- __Parsing "&" in search seed is not parsed correctly__

    - E.g. entering "M&S sandwich" as the seed is interpreted as "M S sandwich" yielding strange results
    - The API interprets "&" as joining two search terms, even when there are no spaces between the characters
    - This can usually be worked around by putting quotes around the term containing the ampersand, but this is not clear to users and is not always effective

- __Competitors list can contain non-competitor results__

    - E.g. the seed term "Xbox" shows "PS5 sales" in the competitors list
    - While "PS5" is a legitimate competitor, this is a limitation of the competitors search results since a suggestion to compare Xbox and PS5 sales will result in the full term "PS5 sales" being interpreted as a competitor, rather than just PS5
    - This also leads to duplicates, since "PS5" is shown elsewhere in the list

- __Concerns list can include apparently positive suggestions__

    - E.g. when using the search seed "Peloton", the concerns list includes "Peloton help lose weight" which is not a concern about the brand or product
    - This is a consequence of how the suggestions work, since a high-ranking suggestion containing "help" is expected to be a concern

## Deployment

- The site is deployed with AWS Lambda serverless functions, via Begin.com

The live link can be found here - https://harryowens.github.io/Spin-expert/


## Credits 

### Content 

- The concept of the tool is heavily inspired by Answer The Public
- The results are derived from Google Autocomplete search suggestions via the API
- The cards for the checklist were derived form an example on [W3Schools] (https://www.w3schools.com/howto/howto_css_cards.asp)

### Media

- The background image is from Unsplash
- The icons for the buttons are from Font Awesome