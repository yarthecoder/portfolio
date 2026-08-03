/* ----------------------- */
/* ----- Read & Hide ----- */
const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

readHideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        readMore.classList.toggle('show');
    });
});


// ------------------------ //
// -- Dark Mode Section -- //

const dkMdBtn = document.querySelector('#dkMdBtn');
const canvas = document.querySelector('#demoCanvas');

dkMdBtn.addEventListener('click', () => {   
    canvas.classList.toggle('dark');
});

