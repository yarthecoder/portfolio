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
const btnPlus = document.querySelector('.btnPlus');
const btnArea = document.querySelector('.btnArea');

function updateLikeCount(button, isLiked) {
    const likeCount = button.querySelector(".likeCount");

    let count = Number(likeCount.textContent);

    likeCount.textContent = isLiked ? count + 1 : count - 1;
}

function toggleLike(button) {
   return button.classList.toggle('liked');
}

function createBtn(button) {
    const likeBtn = document.createElement('button');
    likeBtn.classList.add('likeBtn');

    const btnIcon = document.createElement('i');
    btnIcon.classList.add('btnIcon');
    btnIcon.className = 'fa-solid fa-thumbs-up';

    const likeCount = document.createElement('span');
    likeCount.classList.add('likeCount');
    likeCount.textContent = '0';

    likeBtn.addEventListener('click', () => {
        const isLiked = toggleLike(likeBtn);
        updateLikeCount(likeBtn, isLiked);
    });

    likeBtn.appendChild(likeCount);
    likeBtn.appendChild(btnIcon);

    btnArea.appendChild(likeBtn);
}

btnPlus.addEventListener('click', () => {
    createBtn();
});