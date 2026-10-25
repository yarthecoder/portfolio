// -- Project Card Section -- //
function projectCard(project) {
    
    const card = document.createElement('div');
    card.classList.add('project-card');

    const preview = document.createElement('img');
    preview.classList.add('preview');
    preview.src = project.preview;

    const elementsContainer = document.createElement('div');
    elementsContainer.classList.add('elements-container');


    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');

    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = project.description;


    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');

    const languages = document.createElement('span');
    languages.classList.add('languages');
    languages.textContent = project.languages;

    const projectUrl = document.createElement('a');
    projectUrl.classList.add('project-url');
    projectUrl.href = project.projectUrl;
    projectUrl.target = "_blank";
    projectUrl.textContent = project.projectUrlTxt;
    
    cardHeader.append(title, description);
    cardFooter.append(languages, projectUrl);
    elementsContainer.append(cardHeader, cardFooter);

    card.append(preview, elementsContainer);

    return card;
}

// - Project Loading Section --
function renderProject(projects, place) {
    place.innerHTML = "";
    projects.forEach(project => {
        const card = projectCard(project);
        place.append(card);
    });
    return place;
}


function homePageProjects() {
    const projectsPlace = mainContent.querySelector('.projects-feature-section');
    renderProject(projectsFeature, projectsPlace);

    const gamesPlace = mainContent.querySelector('.games-feature-section');
    renderProject(gamesFeature, gamesPlace);
}

function projectPageProjects() {
    const latestPlace = mainContent.querySelector('.latest-projects');
    renderProject(latestProjects, latestPlace);

    const popularPlace = mainContent.querySelector('.popular-projects');
    renderProject(popularProjects, popularPlace);

    const allProjectsPlace = mainContent.querySelector('.all-projects');
    renderProject(projectsData, allProjectsPlace);

    const upcomingPlace = mainContent.querySelector('.upcoming-projects');
    renderProject(upcomingProjects, upcomingPlace);
}

function gamePageProjects() {
    const latestPlace = mainContent.querySelector('.latest-games');
    renderProject(latestGames, latestPlace);

    const popularPlace = mainContent.querySelector('.popular-games');

    renderProject(popularGames, popularPlace);
    const allGamesPlace = mainContent.querySelector('.all-games');
    renderProject(gamesData, allGamesPlace);

    const upcomingPlace = mainContent.querySelector('.upcoming-games');
    renderProject(upcomingGames, upcomingPlace);
    
}

function loadProjects(page) {
    if (page === 'games') {
        gamePageProjects();
    } else if (page === 'projects') {
        projectPageProjects();
    } else if (page === 'home') {
        homePageProjects();
    }
}
