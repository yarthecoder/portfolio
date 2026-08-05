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

// -- DOM references -- //
const buttonPlusPlus = document.querySelector('.buttonPlusPlus');
const box = document.querySelector('.box');


// -- Create Elements -- //
function createCommentInput() {
    const commentInput = document.createElement('input');
    commentInput.classList.add('commentInput');

    return commentInput;
}

function createSubmitButton(commentInput, commentCount) {
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');

    const submitIcon = document.createElement('i');
    submitIcon.classList.add('btnIcon');
    submitIcon.className = 'fa-solid fa-paper-plane';
    submitButton.appendChild(submitIcon);

    submitButton.addEventListener('click', () => {
        submitComment(commentInput, commentCount);
    });

    return submitButton;
}

function createCommentCount() {
    const commentCount = document.createElement('span');
    commentCount.classList.add('commentCount');
    commentCount.textContent = '0';

    return commentCount;
}

function createCommentButton(commentArea, commentInputArea) {
    const commentButton = document.createElement('button');
    commentButton.classList.add('commentButton');

    const btnIcon = document.createElement('i');
    btnIcon.classList.add('btnIcon');
    btnIcon.className = 'fa-solid fa-comment';
    commentButton.appendChild(btnIcon);
    
    commentButton.addEventListener('click', () => {
        const commentInput = commentInputArea.querySelector('.commentInput');
        toggleComment(commentArea, commentInputArea);
        requestAnimationFrame(() => {
            focusCommentInput(commentInput);
        });
    });

    return commentButton;
}



// -- Behavior -- //
function toggleComment(commentArea, commentInputArea) {
    commentArea.classList.toggle('show');
    commentInputArea.classList.toggle('show');
}

function focusCommentInput(commentInput) {
    commentInput.focus();
}

function updateCommentCount(commentCount, count) {
    commentCount.textContent = parseInt(commentCount.textContent) + count;
}

function textInputValue (commentInput) {
    const text = commentInput.value.trim();
    if (!text) return;
    commentInput.value = "";
    focusCommentInput(commentInput);

    return text;
}

function submitComment(commentInput, commentCount) {
    const text = textInputValue(commentInput);
    if (!text) return;
    updateCommentCount(commentCount, 1);
}




// -- Elements Container Builder -- //
function createCommentArea() {
    const commentArea = document.createElement('div');
    commentArea.classList.add('commentArea');

    return commentArea;
}

function createCommentInputArea(commentInput, submitButton) {
    const commentInputArea = document.createElement('div');
    commentInputArea.classList.add('commentInputArea');

    commentInputArea.appendChild(commentInput);
    commentInputArea.appendChild(submitButton);

    return commentInputArea;
}

function createButtonArea(commentCount, commentButton) {
    const buttonArea = document.createElement("div");
    buttonArea.classList.add('buttonArea');

    buttonArea.appendChild(commentCount);
    buttonArea.appendChild(commentButton);

    return buttonArea;
}


// -- Button card -- //
function createButtonCard() {
    const buttonCard = document.createElement("div");
    buttonCard.classList.add("buttonCard");
    
    const commentArea = createCommentArea();

    const commentInput = createCommentInput();
    const commentCount = createCommentCount();
    const submitButton = createSubmitButton(commentInput, commentCount);

    const commentInputArea = createCommentInputArea(commentInput, submitButton);
    
    const commentButton = createCommentButton(commentArea, commentInputArea);

    const buttonArea = createButtonArea(commentCount, commentButton);

    buttonCard.appendChild(buttonArea);
    buttonCard.appendChild(commentArea);
    buttonCard.appendChild(commentInputArea);
    
    box.appendChild(buttonCard);

    return box;
}


// -- Event listener -- //
buttonPlusPlus.addEventListener('click', () => {
    createButtonCard();
});