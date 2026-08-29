const readHideBtn = document.querySelectorAll('.readHideBtn');
const readMore = document.querySelector('#readMore');

const expandBtn = document.querySelector('#expandBtn');
const icon = expandBtn.querySelector('i');
const main = document.querySelector('main');


// -- Page Expand Section -- 
expandBtn.addEventListener('click', () => {
    main.classList.toggle('expand');
    if (main.classList.contains('expand')) {
        icon.className = "fa-solid fa-down-left-and-up-right-to-center";
    } else {
        icon.className = "fa-solid fa-up-right-and-down-left-from-center";
    }
})


// -- Read & Hide -- 
readHideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        readMore.classList.toggle('show');
    });
});



// -------------------------- //
// -- Demostration Section -- //

// -- DOM references -- 
const commentCount = document.querySelector('.commentCount');
const commentButton = document.querySelector('.commentButton');
const commentBox = document.querySelector('.commentBox');

// -- State --
let commentMode = "comment";
let activeReplyArea = null;


// =======================
// PART I: DOM CREATION 
// =======================

// -- COMMENT CARD ELEMENTS -- //
// Avatar
function createAvatar() {
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");

  const avatarIcon = document.createElement("i");
  avatarIcon.classList.add("fa-solid", "fa-user");
  avatar.appendChild(avatarIcon);

  return avatar;
}

// Comment Header _ user name and time
function createCommentHeader() {
    const commentHeader = document.createElement("div");
    commentHeader.classList.add("comment-header");

    const username = document.createElement("span");
    username.textContent = "User";

    const time = document.createElement("span");
    time.textContent = ".1s";

    commentHeader.appendChild(username);
    commentHeader.appendChild(time);

    return commentHeader;
}

// Message
function createCommentMessage(text) {
    const message = document.createElement("p");
    
    message.classList.add("comment-text");
    message.textContent = text;
    
    return message;
}

// Action Buttons -- 
// Like Action Button  
function createLikeActionButton() {
    const likeActionBtn = document.createElement("button")
    likeActionBtn.classList.add("like-btn");

    likeActionBtn.dataset.onText = "Liked";
    likeActionBtn.dataset.offText = "Like";
    likeActionBtn.textContent = likeActionBtn.dataset.offText;
    return likeActionBtn;
}

// Dislike Actin Button
function createDislikeActionButton() {
    const dislikeActionBtn = document.createElement("button");
    dislikeActionBtn.classList.add("dislike-btn");
    
    dislikeActionBtn.dataset.onText = "Disliked";
    dislikeActionBtn.dataset.offText = "Dislike";
    dislikeActionBtn.textContent = dislikeActionBtn.dataset.offText;
    return dislikeActionBtn;
}

// Reply Button
function createReplyActionButton() {
    const replyActionBtn = document.createElement("button");
    replyActionBtn.classList.add("reply-btn");
    replyActionBtn.textContent = "Reply";
    const replyCount = document.createElement('span');
    replyCount.textContent = '0';
    
    return replyActionBtn;
}

// Delete Button
function createDeleteActionButton() {
    const deleteActionBtn = document.createElement("button");
    deleteActionBtn.classList.add("delete-btn");
    deleteActionBtn.textContent = "Delete";
    return deleteActionBtn;
}

// Reply Area 
function createReplyArea() {
    const area = document.createElement("div");
    area.classList.add("reply-area");

    return area;
}

// Action Buttons Bar - Connect Action Buttons
function buildActionBtnsBar(likeActionBtn, dislikeActionBtn, replyActionBtn, deleteActionBtn) {
    const btnsBar = document.createElement('div');
    btnsBar.classList.add('action-btns-bar')
    
    btnsBar.append( 
        likeActionBtn, 
        dislikeActionBtn, 
        replyActionBtn, 
        deleteActionBtn 
    );

    return btnsBar;   
}

// Comment Structure - Connect the Comment elements
function buildCommentStructure(commentHeader, message, actionBtnsBar, replyArea) {
    const commentStructure = document.createElement('div');
    commentStructure.classList.add('comment-structure');

    commentStructure.append(
        commentHeader,
        message, 
        actionBtnsBar, 
        replyArea
    );

    return commentStructure;
}


// -- COMMENT SYSTEM ELEMENTS -- //
// Cancel Button
function createCancelButton(commentInput) {
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancelButton');

    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = "Cancel Comment";
    
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-x';

    cancelButton.append(tooltip, icon);
    return cancelButton;
}

// Comment Input 
function createCommentInput() {
    const commentInput = document.createElement('input');
    commentInput.classList.add('commentInput');
    commentInput.type= "text"; 
    commentInput.placeholder= "Enter your comment..."; 

    return commentInput;
}

// Submit Button 
function createSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitButton');

    const submitIcon = document.createElement('i');
    submitIcon.className = 'fa-solid fa-paper-plane';

    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = "Submit Comment";

    submitButton.append(tooltip, submitIcon);

    return submitButton;
}


// -- Two Main Containers -- //
// Comment Card Container
function createCommentCardContainer() {
    const commentCardContainer = document.createElement('div');
    commentCardContainer.classList.add('commentCardContainer');

    return commentCardContainer;
}

// Comment Input Area
function buildCommentInputArea(cancelButton, commentInput, submitButton) {
    const commentInputArea = document.createElement('div');
    commentInputArea.classList.add('commentInputArea');

    commentInputArea.append(cancelButton, commentInput, submitButton);

    return commentInputArea;
}



// =================
// PART II: ACTIONS
// =================

// -- Create Behavior -- //
// Update Comment Count
function updateCommentCount(commentCount, count) {
    commentCount.textContent = parseInt(commentCount.textContent) + count;
}

// Handle Like Action
function handleLike(clickedButton, otherButton) {
    const isActive = clickedButton.classList.toggle('active');

    clickedButton.textContent = isActive 
    ? clickedButton.dataset.onText 
    : clickedButton.dataset.offText;

    otherButton.classList.remove('active');
    otherButton.textContent = otherButton.dataset.offText;
}

// Handle Reply
function handleReply(replyArea) {
    commentMode = "reply";
    activeReplyArea = replyArea;
    replyArea.classList.add("show");
    const commentInput = commentBox.querySelector('.commentInput');
    const cancelButton = commentBox.querySelector('.cancelButton');
    const submitButton = commentBox.querySelector('.submitButton');
    requestAnimationFrame(() => {
        commentInput.focus();
    });
    updateUI(cancelButton, commentInput, submitButton);
}

// Handle Cancel 
function handleCancel(cancelButton, commentInput, submitButton) {
    if (commentMode === 'comment') {
        commentBox.classList.remove("show");
    }
    else if (commentMode === 'reply') {
        /*activeReplyArea.classList.remove("show");*/
        commentMode = "comment";
        updateUI(cancelButton, commentInput, submitButton);
    }
}

// Handle Submit
function handleSubmit(commentInput, commentCardContainer) {
    const text = commentInput.value.trim();
    if (!text) return;
    commentInput.value = "";

    appendComment(text, commentCardContainer);

    updateCommentCount(commentCount, 1);
}


// Helper functions --
// Update UI
function updateUI(cancelButton, commentInput, submitButton) {
    const cancelText = cancelButton.querySelector('.tooltip');
    const submitText = submitButton.querySelector('.tooltip');
    if (commentMode === 'comment') {
        cancelText.textContent = "Cancel Comment";
        commentInput.placeholder = "Enter your comment ...";
        submitText.textContent = "Submit Comment";
    }
    else if (commentMode === 'reply') {
        cancelText.textContent = "Cancel Reply";
        commentInput.placeholder = "Reply to user ...";
        submitText.textContent = "Submit Reply";
    }
}

// Set Comment up
function appendComment(text, commentCardContainer) {
    const commentCard = buildCommentCard(text);

    if (commentMode === "comment") {
        commentCardContainer.appendChild(commentCard);
    }
    else if (commentMode === "reply" && activeReplyArea) {
        activeReplyArea.appendChild(commentCard);
        commentCard.classList.add('reply');
        activeReplyArea.classList.add('has-replies'); 
    }
}


// -- Setup Behavior -- //
// Setup Like and Dislike Action Buttons
function setupLikeButtons(likeButton, dislikeButton) {
    likeButton.addEventListener("click", () => {
        handleLike(likeButton, dislikeButton);
    });

    dislikeButton.addEventListener("click", () => {
        handleLike(dislikeButton, likeButton);
    });
}

// Setup Reply Button
function setupReplyButton(replyActionBtn, replyArea) {
    replyActionBtn.addEventListener("click", () => {        
        handleReply(replyArea);
    });
}


// Setup Submit Button
function setupSubmitButton(submitButton, commentInput, commentCardContainer) {
    submitButton.addEventListener('click', () => {
        handleSubmit(commentInput, commentCardContainer);
    });
}

// Setup Cancel Button
function setupCancelButton(cancelButton, commentInput, submitButton) {
    cancelButton.addEventListener('click', () => {
        handleCancel(cancelButton, commentInput, submitButton);
    });
}



// ====================
// PART III: UI BUILDER
// ====================

// Build Comment Card -- Component -- //
function buildCommentCard(text) {
    const card = document.createElement("div");
    card.classList.add("comment-card");

    const avatar = createAvatar();
    const replyArea = createReplyArea();

    const commentHeader = createCommentHeader();
    const message = createCommentMessage(text);

    const likeActionBtn = createLikeActionButton();
    const dislikeActionBtn = createDislikeActionButton();
    setupLikeButtons(likeActionBtn, dislikeActionBtn);

    const replyActionBtn = createReplyActionButton();
    setupReplyButton(replyActionBtn, replyArea);

    const deleteActionBtn = createDeleteActionButton();

    const actionBtnsBar = buildActionBtnsBar(likeActionBtn, dislikeActionBtn, replyActionBtn, deleteActionBtn);
    
    const commentStructure = buildCommentStructure(commentHeader, message, actionBtnsBar, replyArea);

    card.append(avatar, commentStructure);

    return card;
}

// Build Comment System
function builtCommentSystem() {
    const cancelButton = createCancelButton();
    const commentInput = createCommentInput();
    const submitButton = createSubmitButton(commentInput);
    
    const commentCardContainer = createCommentCardContainer();
    const commentInputArea = buildCommentInputArea(cancelButton, commentInput, submitButton);

    setupSubmitButton(submitButton, commentInput, commentCardContainer);
    setupCancelButton(cancelButton, commentInput, submitButton);
    
    commentBox.append(
        commentCardContainer,
        commentInputArea
    );
}



// -- Main Controller -- //
// -- Comment Button -- //

function handleComment() {
    commentBox.classList.toggle('show');
    if (commentBox.classList.contains('show')) {
        let commentInput = commentBox.querySelector('.commentInput');
        if (!commentInput) {
            builtCommentSystem();
            commentInput = commentBox.querySelector('.commentInput');           
        }   
        requestAnimationFrame(() => {
            commentInput.focus();
        });     
    }
}

commentButton.addEventListener('click', () => {
    handleComment();
});