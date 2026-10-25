// - Projects Data --
const projectsData = [
    {   
        id: 1,
        slug: "light-bulb",
        title: "Light Bulb",
        description: "The first DOM practice project, I built to learn the basics of querySelector() and classList.toggle() by turning a light bulb on and off with a switch.",
        category: "DOM",
        type: "project",
        languages: "JavaScript, CSS, HTML",
        views: 10,
        feature: true,
        preview: "/assets/images/light-bulb-preview.png",
        projectUrl: "/js-lab/01-light-bulb/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-09" 
    },

    {
        id: 2,
        slug: "like-and-comment",
        title: "Like and Comment",
        description: "A simple like and comment feature implemented with JavaScript and DOM manipulation.",
        category: "DOM",
        type: "project",
        languages: "HTML, JavaScript, CSS",
        views: 10,
        feature: false,
        preview: "/assets/images/like-and-comment-preview.png",
        projectUrl: "/js-lab/02-like-and-comment/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-10"
    },

    {
        id: 3,
        slug: "social-post",
        title: "Social Post",
        description: "The updated version of the Like and Comment project,inspired by my curiosity about how social media posts work while practicing DOM manipulation and event handling.",
        category: "DOM",
        type: "project",
        languages: " HTML, JavaScript, CSS",
        views: 10,
        feature: false,
        preview: "#",
        projectUrl: "/js-lab/03-social-post/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-12"
    },

    {
        id: 4,
        slug: "dark-mode",
        title: "Dark Mode",
        description: "A simple dark mode toggle feature, built to learn Nested CSS classes and how to control them with JavaScript.",
        category: "DOM",
        type: "project",
        languages: "CSS, HTML, JavaScript",
        views: 10,
        feature: false,
        preview: "/assets/images/dark-mode-preview.png",
        projectUrl: "/css-lab/01-dark-mode/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-13"
    },

    {
        id: 5,
        slug: "themes",
        title: "Themes",
        description: "An upgraded theme system using CSS variables and JavaScript to manage reusable color values and switch between different visual themes.",
        category: "DOM",
        type: "project",
        languages: "CSS, HTML, JavaScript",
        views: 100,
        feature: false,
        preview: "/assets/images/themes-preview.png",
        projectUrl: "/css-lab/02-themes/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-16"
    },

    {
        id: 6,
        slug: "search-box",
        title: "Search Box",
        description: "Building a simple search box using JavaScript arrays and DOM manipulation.",
        category: "DOM",
        type: "project",
        languages: "JavaScript, HTML, CSS",
        views: 10,
        feature: false,
        preview: "/assets/images/search-box-preview.png",
        projectUrl: "/js-lab/04-search-box/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-17"
    },

    {
        id: 7,
        slug: "brightness-slider",
        title: "Brightness Slider",
        description: "Building an interactive brightness slider using CSS variables and JavaScript DOM manipulation.",
        category: "DOM",
        type: "project",
        languages: "JavaScript, CSS, HTML",
        views: 10,
        feature: false,
        preview: "/assets/images/brightness-slider-preview.png",
        projectUrl: "/js-lab/05-brightness-slider/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-07-19"
    },

    {
        id: 8,
        slug: "comment-card",
        title: "Comment Card",
        description: "A dynamic comment system built with vanilla JavaScript, inspired by my curiosity about how comment systems work on social media platforms.",
        category: "DOM",
        type: "project",
        languages: "JavaScript, CSS, HTML",
        views: 1000,
        feature: true,
        preview: "/assets/images/comment-card-preview.png",
        projectUrl: "/js-lab/06-comment-card/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-08-20"
    },

    {
        id: 9,
        slug: "js-load-spa",
        title: "JS Load SPA ",
        description: "A dynamic SPA built with vanilla JavaScript that loads page content and project data without reloading the entire page.",
        category: "DOM",
        type: "project",
        languages: "JavaScript, CSS, HTML",
        views: 10000,
        feature: true,
        preview: "/assets/images/js-load-spa-preview.png",
        projectUrl: "/js-lab/07-js-load-spa/index.html",
        projectUrlTxt: 'To Project',
        date: "2026-08-30"
    }    
];

const upcomingProjects =  [
    {
        id: 1,
        slug: "get",
        title: "GET",
        description: "comming soon.",
        category: "DOM",
        type: "project",
        languages: "",
        views: 0,
        feature: false,
        preview: "#",
        projectUrl: "#",
        projectUrlTxt: "",
        date: ""
    }
];


// - Games Data --
const gamesData = [
    {
        id: 1,
        slug: "tic-tac-toe",
        title: "Tic-Tac-Toe",
        description: "A simple but fun game project I built to practice game logic, animations, and user interaction.",
        category: "Game",
        type: "game",
        languages: "JavaScript, CSS, HTML",
        views: 100,
        feature: false,
        preview: "../assets/images/screenshot-tic-tac-toe.png",
        projectUrl: "../game-lab/01-tic-tac-toe/",
        projectUrlTxt: 'To Game',
        date: "2026-08-13"
    },

    {
        id: 2,
        slug: "memory-match",
        title: "Memory Match",
        description: " A memory card game I built while exploring game logic, timing, scoring, and playful UI design.",
        category: "Game",
        type: "game",
        languages: "JavaScript, CSS",
        views: 120,
        feature: true,
        preview: "../assets/images/screenshot-memory-match.png",
        projectUrl: "../game-lab/02-memory-match/",
        projectUrlTxt: 'To Game',
        date: "2026-08-27"
    },

    {
        id: 3,
        slug: "snake-game",
        title: "Snake Game",
        description: "A snake game I built while exploring game logic, timing, scoring, and playful UI design.",
        category: "Game",
        type: "game",
        languages: "JavaScript, CSS, HTML",
        views: 120,
        feature: true,
        preview: "../assets/images/screenshot-snake-game.png",
        projectUrl: "../game-lab/03-snake-game/index.html",
        projectUrlTxt: 'To Game',
        date: "2026-09-30"
    }
];

const upcomingGames = [
    {
        id: 1,
        slug: "tetris",
        title: "Tetris",
        description: "Comming soon.",
        category: "Game",
        type: "game",
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
        slug: "connect-four",
        title: "Connect Four",
        description: "Upcoming.",
        category: "Game",
        type: "game",
        languages: "",
        views: 0,
        feature: false,
        preview: "#",
        projectUrl: "#",
        projectUrlTxt: "",
        date: ""
    }
];


// - Filtter Projects Section --
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