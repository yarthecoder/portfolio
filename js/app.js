const mainContent = document.querySelector('#main-content');

const allowedPages = [
    'home',
    'projects',
    'games',
    'arts',
    'about',
    'terms',
    'privacy'
];

const pageTitles = {
    projects: 'Projects',
    games: 'Games',
    arts: 'Arts',
    about: 'About',
    terms: 'Terms',
    privacy: 'Privacy'
};


// - Pages Title Section --
function getPageFromHash() {
    return location.hash.slice(2) || 'home';
}

function updateTitle(page) {
    if(page === 'home') {
       document.title = `yarTheJourney`;
    } else {
        document.title = `yarTheJourney | ${pageTitles[page] || 'Page'}`;
    }
}


// - Page Loading Section --
async function loadPage(page) {
    if (!allowedPages.includes(page)) {
        mainContent.textContent = 'Page not found.';
        return;
    }

    mainContent.innerHTML = "Loading...";
    try {
        const response = await fetch(`pages/${page}.html`);

        if (!response.ok) {
            throw new Error(`Unable to load page: ${response.status}`);
        }

        const html = await response.text();
        mainContent.innerHTML = html;
        loadProjects(page);

        return true;
        
    } catch (error) {
        mainContent.textContent = 'The page could not be loaded.';
        console.error(error);

        return false;
    }
}

async function handleRouteChange() {
    const hash = getPageFromHash();

    if (allowedPages.includes(hash)) {
        await loadPage(hash);
        updateTitle(hash);
        return;
    }
    /*
    const target = document.getElementById(hash);

    if (target) {
        target.scrollIntoView();
    }
    */
}

window.addEventListener('hashchange', handleRouteChange);

handleRouteChange();
