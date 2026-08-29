// ----------------------------- //
// -- Like and Comment Setion -- //

// -- Like Button functions -- //

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
  if (likeBtn.classList.contains("liked")) {
    likeBtn.textContent = "❤️";
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    likeBtn.textContent = "🤍";
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
});



// -- Comment button and its functions -- //

const commentBtn = document.querySelector("#commentBtn");
const commentInput = document.querySelector('#commentInput');
const commentList = document.querySelector("#commentList");
const commentSubmitBtn = document.querySelector("#commentSubmitBtn");
const commentCount = document.querySelector("#commentCount");
const commentSection = document.querySelector("#commentSection");


commentBtn.addEventListener("click", () => {
  const isOpen = commentBtn.classList.toggle("open");

  commentSection.classList.toggle("show", isOpen);

  if (isOpen) {
    requestAnimationFrame(() => commentInput.focus());
  }
});
commentSection.addEventListener("click", (e) => {
  e.stopPropagation();
});



function submitComment() {
  const text = commentInput.value.trim();
  if (!text) return;

  const newComment = document.createElement("li")
  newComment.textContent = text;
  commentList.appendChild(newComment);
 
  commentInput.value = "";
  commentCount.textContent = parseInt(commentCount.textContent) + 1;
}

commentSubmitBtn.addEventListener("click", submitComment);
commentInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitComment();
  }
});





// -------------------------- //
// -- Demonstration Setion -- //