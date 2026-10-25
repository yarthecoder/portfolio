const displayPanel = document.querySelector('#display-panel');
const panelHeader = displayPanel.querySelector('#panel-header');
const panelHeading = displayPanel.querySelector('#panel-heading');
const panelContent = displayPanel.querySelector('#panel-content');
const exitPanel = panelHeader.querySelector('#exit-panel');

const confirmPanel = document.querySelector('#confirm-panel');
const cancelPanel = document.querySelector('#cancel-button');



// - Display Panel --
exitPanel.addEventListener('click', () => {
    displayPanel.classList.remove('show');
});


// - Confirmation Panel --
cancelPanel.addEventListener('click', () => {
    confirmPanel.classList.remove('show');
});



// - Search Section -- //
const searchData = [
    ...gamesData,
    ...projectsData
];

function createSearchBox() {
    const area = document.createElement('div');
    area.classList.add('search-box');

    const searchBtnIcon = document.createElement('i');
    searchBtnIcon.className = 'fa-solid fa-search';
    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    searchButton.title = "Search";
    searchButton.append(searchBtnIcon);

    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.type= "search"; 
    searchInput.placeholder= "Search . . ."; 

    const cancelBtnIcon = document.createElement('i');
    cancelBtnIcon.className = 'fa-solid fa-x';
    const cancelSearch = document.createElement('button');
    cancelSearch.classList.add('cancel-search');
    cancelSearch.append(cancelBtnIcon);

    searchInputAction(searchInput);
    searchButtonAction(searchButton, searchInput);
    cancelSearchAction(cancelSearch);
    
    area.append(searchButton, searchInput, cancelSearch);
    return area;
}

function openSearch() {
    const input = createSearchBox();
    const searchInput = input.querySelector('.search-input');
    themeBox.classList.remove('open');
    displayPanel.classList.add('show');
    panelHeader.replaceChildren(input);
    body.classList.add('inactive');
    searchTrigger.classList.add('hide');
    header.classList.add('inactive');
    requestAnimationFrame(() => searchInput.focus());
}

function closeSearch(){
    searchTrigger.classList.remove('hide');
    displayPanel.classList.remove('show');
    panelHeader.replaceChildren(panelHeading, exitPanel);
    panelContent.innerHTML = "";
    body.classList.remove('inactive');
    header.classList.remove('inactive');
}

function  search(searchInput) {
    const text = searchInput.value.trim().toLowerCase();
    if (!text) return;

    const results = searchData.filter(data => data.title.toLowerCase().includes(text));

    panelContent.replaceChildren();

    if (results.length > 0) {
        results.forEach(data => {
            const result = document.createElement('a');
            result.classList.add('search-result');
            result.href = data.projectUrl;
            result.target = '_blank';
            result.rel = 'noopener noreferrer';
            result.textContent = data.title;

            panelContent.append(result);
            result.addEventListener('click', closeSearch);
        });
    } else {
        panelContent.textContent = 'No project or game found in yarTheJourney';
    }   
}

function searchButtonAction(searchButton, searchInput) {
    searchButton.addEventListener("click", () => {
        search(searchInput);
    });
}

function searchInputAction(searchInput) {
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            search(searchInput);
        }
    });
}

function cancelSearchAction(cancelSearch) {
    cancelSearch.addEventListener('click', closeSearch);
}

searchTrigger.addEventListener('click', openSearch);


/* 
displayPanel.addEventListener('click', event => {
    if (event.target === displayPanel) {
        closeSearch();
    }
});
*/



