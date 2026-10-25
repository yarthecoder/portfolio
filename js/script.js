const body = document.querySelector('body');
const header = document.querySelector('header');
const headerSetting = document.querySelector('.header-setting');

const nav = document.querySelector('nav');
const naviLinks = document.querySelectorAll('nav a');

const hamburger = document.querySelector('#hamburger');
const hamburgerIcon = document.querySelector('#hamburger i');

const searchTrigger = document.querySelector('.search-trigger');
const themeTrigger = document.querySelector('#theme-trigger');
const themeBox = document.querySelector('.theme-box');
const themeButtons = document.querySelectorAll('.theme-box button');

const footer = document.querySelector('footer');
const copyright = document.querySelector('.copyright');
const mediaWidth = window.matchMedia('(max-width: 768px)');


// - Theme Section --
themeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        changeTheme(event);
    });
});

function changeTheme(event) {
    const theme = event.currentTarget.dataset.theme;
    document.body.dataset.theme = theme;
    themeBox.classList.remove('open');
}

themeTrigger.addEventListener('click', () => {
    themeBox.classList.toggle('open');
    displayPanel.classList.remove('show');
});


// - Hambuger Section -- 
function hamburgerUIUpdate() {
    if (nav.classList.contains('open')) {
        hamburgerIcon.className = "fa-solid fa-x";
        hamburger.title = 'Exit Menu';
    } else {
        hamburgerIcon.className = "fa-solid fa-bars";
        hamburger.title = 'Menu';
    }
}

function hamburgerAction() {
    const isOpen = nav.classList.toggle('open');

    body.classList.toggle('inactive', isOpen);
    mainContent.classList.toggle('inactive', isOpen);
    footer.classList.toggle('inactive', isOpen);
    headerSetting.classList.toggle('inactive', isOpen);
    hamburgerUIUpdate();
}

function closeNavigation() {  
    nav.classList.remove('open');
    body.classList.remove('inactive');
    footer.classList.remove('inactive');  
    mainContent.classList.remove('inactive'); 
    headerSetting.classList.remove('inactive');   
    hamburgerUIUpdate();
}

mediaWidth.addEventListener('change', ({ matches }) => {
    if (!matches) {
        closeNavigation();
    }
});

hamburger.addEventListener('click', hamburgerAction);

naviLinks.forEach(link => {
    link.addEventListener('click', event => {
        closeNavigation();
    })
})

copyright.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


