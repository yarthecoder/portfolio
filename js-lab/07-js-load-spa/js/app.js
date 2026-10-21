// - DOM References --
const naviLinks = document.querySelectorAll('#naviLinks a');
const demoMain = document.querySelector('#demo-main');

// - Projects Data --
const projectsData = [
    {   
        id: 1,
        title: "Light Bulb",
        description: "The first DOM practice project, I built to learn the basics of querySelector() and classList.toggle() by turning a light bulb on and off with a switch.",
        category: "DOM",
        languages: "JavaScript, CSS, HTML",
        views: 10,
        feature: true,
        preview: "../../../assets/images/light-bulb-preview.png",
        projectUrl: "../../../js-lab/01-light-bulb/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-09" 
    },

    {
        id: 2,
        title: "Like and Comment",
        description: "A simple like and comment feature implemented with JavaScript and DOM manipulation.",
        category: "DOM",
        languages: "HTML, JavaScript, CSS",
        views: 10,
        feature: false,
        preview: "../../../assets/images/like-and-comment-preview.png",
        projectUrl: "../../../js-lab/02-like-and-comment/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-10"
    },

    {
        id: 3,
        title: "Social Post",
        description: "The updated version of the Like and Comment project,inspired by my curiosity about how social media posts work while practicing DOM manipulation and event handling.",
        category: "DOM",
        languages: " HTML, JavaScript, CSS",
        views: 10,
        feature: false,
        preview: "#",
        projectUrl: "../../../js-lab/03-social-post/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-12"
    },

    {
        id: 4,
        title: "Dark Mode",
        description: "A simple dark mode toggle feature, built to learn Nested CSS classes and how to control them with JavaScript.",
        category: "DOM",
        languages: "CSS, HTML, JavaScript",
        views: 10,
        feature: false,
        preview: "../../../assets/images/dark-mode-preview.png",
        projectUrl: "../../../css-lab/01-dark-mode/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-13"
    },

    {
        id: 5,
        title: "Themes",
        description: "An upgraded theme system using CSS variables and JavaScript to manage reusable color values and switch between different visual themes.",
        category: "DOM",
        languages: "CSS, HTML, JavaScript",
        views: 100,
        feature: true,
        preview: "../../../assets/images/themes-preview.png",
        projectUrl: "../../../css-lab/02-themes/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-16"
    },

    {
        id: 6,
        title: "Search Box",
        description: "Building a simple search box using JavaScript arrays and DOM manipulation.",
        category: "DOM",
        languages: "JavaScript, HTML, CSS",
        views: 10,
        feature: false,
        preview: "../../../assets/images/search-box-preview.png",
        projectUrl: "../../../js-lab/04-search-box/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-17"
    },
    {
        id: 7,
        title: "Brightness Slider",
        description: "Building an interactive brightness slider using CSS variables and JavaScript DOM manipulation.",
        category: "DOM",
        languages: "JavaScript, CSS, HTML",
        views: 10,
        feature: false,
        preview: "../../../assets/images/brightness-slider-preview.png",
        projectUrl: "../../../js-lab/05-brightness-slider/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-19"
    },

    {
        id: 8,
        title: "Comment Card",
        description: "A dynamic comment system built with vanilla JavaScript, inspired by my curiosity about how comment systems work on social media platforms.",
        category: "DOM",
        languages: "JavaScript, CSS, HTML",
        views: 1000,
        feature: true,
        preview: "../../../assets/images/comment-card-preview.png",
        projectUrl: "../../../js-lab/06-comment-card/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-08-20"
    }
    
];

const upcomingProjects =  [
    {
        id: 1,
        title: "GET",
        description: "comming soon.",
        category: "DOM",
        languages: "",
        views: 0,
        feature: false,
        preview: "#",
        projectUrl: "#",
        projectUrlTxt: "",
        date: ""
    }
];

const gamesData = [
    {
        id: 1,
        title: "Tic-Tac-Toe",
        description: "A simple but fun game project I built to practice game logic, animations, and user interaction.",
        category: "Game",
        languages: "JavaScript, CSS, HTML",
        views: 100,
        feature: false,
        preview: "../../../assets/images/screenshot-tic-tac-toe.png",
        projectUrl: "../../../game-lab/01-tic-tac-toe",
        projectUrlTxt: 'To Game',
        date: "2026-08-13"
    },
    {
        id: 2,
        title: "Memory Match",
        description: " A memory card game I built while exploring game logic, timing, scoring, and playful UI design.",
        category: "Game",
        languages: "JavaScript, CSS",
        views: 120,
        feature: true,
        preview: "../../../assets/images/screenshot-memory-match.png",
        projectUrl: "../../../game-lab/02-memory-match",
        projectUrlTxt: 'To Game',
        date: "2026-08-27"
    },
    {
        id: 3,
        title: "Snake Game",
        description: "A snake game I built while exploring game logic, timing, scoring, and playful UI design.",
        category: "Game",
        languages: "JavaScript, CSS, HTML",
        views: 120,
        feature: true,
        preview: "../../../assets/images/screenshot-snake-game.png",
        projectUrl: "../../../game-lab/03-snake-game/index.html",
        projectUrlTxt: 'To Game',
        date: "2026-09-30"
    }
];

const upcomingGames = [
    {
        id: 1,
        title: "Tetris",
        description: "Comming soon.",
        category: "Game",
        languages: "",
        views: 0,
        feature: false,
        preview: "#",
        projectUrl: "#",
        projectUrlTxt: "",
        date: ""
    },
    {
        id: 2,
        title: "Connect Four",
        description: "Upcoming.",
        category: "Game",
        languages: "",
        views: 0,
        feature: false,
        preview: "#",
        projectUrl: "#",
        projectUrlTxt: "",
        date: ""
    }
];

const projectsFeature = projectsData.filter(project => project.feature);

const latestProjects = [...projectsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2)
;

const popularProjects = [...projectsData]    
    .sort((a, b) => b.views - a.views)
    .slice(0, 2)
;


const gamesFeature = gamesData.filter(game => game.feature);

const latestGames = [...gamesData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2)
;

const popularGames = [...gamesData]    
    .sort((a, b) => b.views - a.views)
    .slice(0, 2)
;


// - Project Loading Section --
function projectCard(project) {
    
    const card = document.createElement('div');
    card.classList.add('project-card');

    const elementsContainer = document.createElement('div');
    elementsContainer.classList.add('elements-container');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;

    const preview = document.createElement('img');
    preview.classList.add('preview');
    preview.src = project.preview;

    const projectFooter = document.createElement('div');
    projectFooter.classList.add('project-footer');

    const languages = document.createElement('span');
    languages.classList.add('language');
    languages.textContent = project.languages;

    const projectUrl = document.createElement('a');
    projectUrl.classList.add('project-url');
    projectUrl.href = project.projectUrl;
    projectUrl.target = "_blank";
    projectUrl.textContent = project.projectUrlTxt;

    projectFooter.append(languages, projectUrl);
    elementsContainer.append(title, description, preview, projectFooter);

    card.append(elementsContainer);

    return card;
}

function renderProject(projects, place) {
    place.innerHTML = "";
    projects.forEach(project => {
        const card = projectCard(project);
        place.append(card);
    });
    return place;
}


function homePageProjects() {
    const projectsPlace = demoMain.querySelector('.projects-feature-section');
    renderProject(projectsFeature, projectsPlace);

    const gamesPlace = demoMain.querySelector('.games-feature-section');
    renderProject(gamesFeature, gamesPlace);
}

function projectPageProjects() {
    const latestPlace = demoMain.querySelector('.latest-projects');
    renderProject(latestProjects, latestPlace);

    const popularPlace = demoMain.querySelector('.popular-projects');
    renderProject(popularProjects, popularPlace);

    const allProjectsPlace = demoMain.querySelector('.all-projects');
    renderProject(projectsData, allProjectsPlace);

    const upcomingPlace = demoMain.querySelector('.upcoming-projects');
    renderProject(upcomingProjects, upcomingPlace);
}

function gamePageProjects() {
    const latestPlace = demoMain.querySelector('.latest-games');
    renderProject(latestGames, latestPlace);

    const popularPlace = demoMain.querySelector('.popular-games');

    renderProject(popularGames, popularPlace);
    const allGamesPlace = demoMain.querySelector('.all-games');
    renderProject(gamesData, allGamesPlace);

    const upcomingPlace = demoMain.querySelector('.upcoming-games');
    renderProject(upcomingGames, upcomingPlace);
    
}

function loadProjects(page) {
    if (page === 'projects') {
        projectPageProjects();
    } else if (page === 'games') {
        gamePageProjects()
    } else if (page === 'home') {
        homePageProjects()
    }
}



// - Page Loading Section --
async function loadPage(page) {
    demoMain.innerHTML = "Loading...";
    try {
        const response = await fetch(`pages/${page}.html`);

        if (!response.ok) {
            throw new Error(`Unable to load page: ${response.status}`);
        }

        const html = await response.text();
        demoMain.innerHTML = html;
        loadProjects(page);
        
    } catch (error) {
        demoMain.textContent = 'The page could not be loaded.';
        console.error(error);
    }
}

naviLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const page = link.dataset.page;
        loadPage(page);
    })
})

loadPage('home');

