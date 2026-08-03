const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

const expandBtn = document.querySelector('#expandBtn');
const icon = expandBtn.querySelector('i');
const main = document.querySelector('main');

const themeBtn = document.querySelector('#themeBtn');
const canvas = document.querySelector('#demoCanvasBody');


/* ----------------------- */
/* ----- Read & Hide ----- */

readHideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        readMore.classList.toggle('show');
    });
});


// -- Page Expand Section -- //

expandBtn.addEventListener('click', () => {
    main.classList.toggle('expand');
    canvas.classList.toggle('expand'); // unnecessary line coz canvas is insdie the main
    if (main.classList.contains('expand')) {
        icon.className = "fa-solid fa-down-left-and-up-right-to-center";
    } else {
        icon.className = "fa-solid fa-up-right-and-down-left-from-center";
    }
})


// -------------------------- //
// -- Theme Toggle Section -- //

const themes = ['root', 'theme-dark', 'theme-ocean', 'theme-coffee', 'theme-homebrew'];
let currentThemeIndex = 0;

function updateThemeIcon () {
    const icon = themeBtn.querySelector('i');
    if (!icon) return;

    if (themes[currentThemeIndex] === 'root') {
        icon.className = 'fa-regular fa-sun';
    } else if (themes[currentThemeIndex] === 'theme-dark') {
        icon.className = 'fa-solid fa-moon';
    } else if (themes[currentThemeIndex] === 'theme-ocean') {
        icon.className = 'fa-solid fa-water';
    } else if (themes[currentThemeIndex] === 'theme-coffee') {
        icon.className = 'fa-solid fa-mug-hot';
    } else {
        icon.className = 'fa-solid fa-flask';
    }
}

updateThemeIcon();

themeBtn.addEventListener('click', () => {
    canvas.classList.remove(...themes);
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    canvas.classList.add(themes[currentThemeIndex]);
    updateThemeIcon();
});


