const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

const expandBtn = document.querySelector('#expandBtn');
const icon = expandBtn.querySelector('i');
const main = document.querySelector('main');

const searchBtn = document.querySelector('#searchBtn');
const searchInput = document.querySelector('#search-box input');

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

const fruits = [
    "apple",
    "banana",
    "orange",
    "mango",
    "grape",
    "pineapple",
    "watermelon",
    "strawberry",
    "kiwi",
    "cherry"
];

function  search() {
    const text = searchInput.value.trim().toLowerCase();
    if (!text) return;

    if (fruits.includes(text)) {
       const fruitSection = document.getElementById(text);
       fruitSection.scrollIntoView();
       searchInput.value = "";
    } else {
        searchInput.value = "Try to find another fruits";
        searchInput.select();
    }
}

searchBtn.addEventListener("click", search);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        search();
    }
});