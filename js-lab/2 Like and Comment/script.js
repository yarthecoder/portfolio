

// -- Demonstration section -- //

// -- Demo Like Button Functionality --
const demoLikeBtn = document.querySelector("#demoLikeBtn");
const demoLikeCount = document.querySelector("#demoLikeCount");

demoLikeBtn.addEventListener("click", () => {
    demoLikeBtn.classList.toggle("liked");
    if (demoLikeBtn.classList.contains("liked")) {
        demoLikeBtn.textContent = "❤️ Liked";
        demoLikeCount.textContent = parseInt(demoLikeCount.textContent) + 1;
    } else {
        demoLikeBtn.textContent = "🤍 Like";
        demoLikeCount.textContent = parseInt(demoLikeCount.textContent) - 1;
    }
}); 


// -- Demo Comment Box Functionality --
const demoCommentBtn = document.querySelector("#demoCommentBtn");
const demoCommentInput = document.querySelector("#demoCommentInput");
const demoCommentList = document.querySelector("#demoCommentList");
const demoCommentSubmitBtn = document.querySelector("#demoCommentSubmitBtn");
const demoCommentCount = document.querySelector("#demoCommentCount");


demoCommentBtn.addEventListener("click", () => {
    demoCommentInput.focus();
});

function demoSubmitComment() {
    const text = demoCommentInput.value.trim();

    if (!text) return;

    const newComment = document.createElement("li");
    newComment.textContent = text;
    demoCommentList.appendChild(newComment);

    demoCommentInput.value = "";  
    demoCommentCount.textContent = parseInt(demoCommentCount.textContent) + 1;  
}

demoCommentSubmitBtn.addEventListener("click", () => {
    demoSubmitComment();
});

demoCommentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        demoSubmitComment();
    }
});




// -- Footer Section -- //
// -- Footer Section: Comment Box Functionality --

// -- like Button Functionality --
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');

likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
    if (likeBtn.classList.contains('liked')) {
        likeBtn.textContent = "❤️ Liked";
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        likeBtn.textContent = "🤍 Like"
        likeCount.textContent = parseInt(likeCount.textContent) - 1;
    }
});



// -- Comment Box Functionality --

const commentBtn = document.getElementById("commentBtn");
const commentSubmitBtn = document.getElementById("commentSubmitBtn");
const commentCount = document.getElementById("commentCount");
const commentInput = document.getElementById("commentInput");
const commentList = document.getElementById("commentList");

commentBtn.addEventListener("click", () => {
    commentInput.focus();
});

function  submitComment() {
    const text = commentInput.value.trim();

    if (!text) return;

    const newComment = document.createElement("li");
    newComment.textContent = text;
    commentList.appendChild(newComment);

    commentInput.value = "";
    commentCount.textContent = parseInt(commentCount.textContent) + 1;
}

commentSubmitBtn.addEventListener("click", submitComment);

commentInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        submitComment();
    }
});

