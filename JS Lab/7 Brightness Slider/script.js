const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

const expandBtn = document.querySelector('#expandBtn');
const icon = expandBtn.querySelector('i');
const main = document.querySelector('main');


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
    if (main.classList.contains('expand')) {
        icon.className = "fa-solid fa-down-left-and-up-right-to-center";
    } else {
        icon.className = "fa-solid fa-up-right-and-down-left-from-center";
    }
})


// -------------------------- //
// -- Demostration Section -- //

const dragBar = document.querySelector('#dragBar');
const brightnessLabel = document.querySelector('#brightnessLabel');
const voltageBtn = document.querySelector('#voltageBtn');
const lightBulb = document.querySelector('#light');
const canvas = document.querySelector('#demoCanvasBody');


function updateBackgroundColor() {
    const brightness = Number(dragBar.value);
    const r = 100 + brightness;
    const g = 100 + brightness;
    const b = 100 + brightness * 0.5;

    document.documentElement.style.setProperty('--bg-r', r);
    document.documentElement.style.setProperty('--bg-g', g);
    document.documentElement.style.setProperty('--bg-b', b);
}

updateBackgroundColor();


let bulbState = "normal";
function updateUI() {
    brightnessLabel.style.color = "black";
    brightnessLabel.textContent = 'Brightness: ' + dragBar.value + ' %';
    canvas.classList.remove('broken');

    if (bulbState === "normal") {
        voltageBtn.textContent = "High Voltage";
        dragBar.disabled = false;
    } else if (bulbState === 'broken') {
        voltageBtn.textContent = "Repair";
        dragBar.disabled = true;
        canvas.classList.add('broken');
    }
}

updateUI();


function updateBrightness() {
    const valuePercent = dragBar.value;
    document.documentElement.style.setProperty('--brightness', valuePercent + '%');
    brightnessLabel.textContent = 'Brightness: ' + valuePercent + ' %';
    updateBackgroundColor();
}

updateBrightness();
dragBar.addEventListener('input', updateBrightness);


voltageBtn.addEventListener('click', () => {
    if (bulbState === "normal") {
        dragBar.value = 100;
        updateBrightness();
        updateUI();

        setTimeout(() => {
            bulbState = 'broken';
            updateUI();              
            brightnessLabel.style.color = "red";
            brightnessLabel.textContent = 'Oh no! The light bulb has burned out because of high voltage. Can you fix it?';
        }, 2000);

    } else if (bulbState === "broken") {
        brightnessLabel.style.color = "green";
        brightnessLabel.textContent = 'Reparing . . . . .';
        setTimeout(() => {
            bulbState = "normal";
            updateUI();
        }, 5000);
    }
});


dragBar.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
        event.preventDefault();
        dragBar.value = Math.min(100, Number(dragBar.value) + 10);
        updateBrightness();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
        event.preventDefault();
        dragBar.value = Math.max(0, Number(dragBar.value) - 10);
        updateBrightness();
    }
});





