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


// ----------------------------- //
// -- Like and Comment Setion -- //


// -- Like Button functions -- //

const likeBtn = document.querySelector(".likeBtn");
const likeCount = document.querySelector(".likeCount");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.toggle("liked");
  if (likeBtn.classList.contains("liked")) {
    likeBtn.style.color = "red";
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    likeBtn.style.color = "grey";
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
});



// -- Comment button and its functions -- //

const commentBtn = document.querySelector(".commentBtn");
const commentInput = document.querySelector('.commentInput');
const commentArea = document.querySelector(".comment-area");
const commentSubmitBtn = document.querySelector(".commentSubmitBtn");
const commentCount = document.querySelector(".commentCount");
const commentSection = document.querySelector(".commentSection");

// -- To Pop up Comment Section --
commentBtn.addEventListener("click", () => {
  const isOpen = commentBtn.classList.toggle("open");

  commentSection.classList.toggle("show", isOpen);
  commentSection.style.transform = "";

  if (isOpen) {
    requestAnimationFrame(() => commentInput.focus());
  }
});
commentSection.addEventListener("click", (e) => {
  e.stopPropagation();
});


// -- Comment Text -- 
function submitComment() {
  const text = commentInput.value.trim();
  if (!text) return;

  createCommentCard(text);
  commentInput.value = "";
  commentCount.textContent = parseInt(commentCount.textContent) + 1;
}

// -- Comment Card Section -- 
function createCommentCard(text) {
  const card = document.createElement("div");
  card.classList.add("comment-card");


  const profile = document.createElement("div");
  profile.classList.add("avatar");
  profile.textContent = "Y";


  const commentStructure = document.createElement('div');
  commentStructure.classList.add('comment-structure');

  const header = document.createElement("div");
  header.classList.add("comment-header");

  const name = document.createElement("span");
  name.textContent = "User";

  const time = document.createElement("span");
  time.textContent = ".1s";


  const message = document.createElement("p");
  message.classList.add("comment-text");
  message.textContent = text;


  const reactBtns = document.createElement('div');
  reactBtns.classList.add('comment-actions-btns');

  const likeBtn = document.createElement('button');
  likeBtn.textContent = "Like";

  const disLikeBtn = document.createElement('button');
  disLikeBtn.textContent = "DisLike";

  const replyBtn = document.createElement('button');
  replyBtn.textContent = "Reply";

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";

 
  header.appendChild(name);
  header.appendChild(time);

  reactBtns.appendChild(likeBtn);
  reactBtns.appendChild(disLikeBtn);
  reactBtns.appendChild(replyBtn);
  reactBtns.appendChild(deleteBtn);

  commentStructure.appendChild(header);
  commentStructure.appendChild(message);
  commentStructure.appendChild(reactBtns);
  
  card.appendChild(profile);
  card.appendChild(commentStructure);

  commentArea.appendChild(card);
}

// -- TO Submit --
commentSubmitBtn.addEventListener("click", submitComment);
commentInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitComment();
  }
});


// -- drag Handle Section -- //
const handle = document.querySelector('.handle');

let startY = 0;
let currentY = 0;
let isDragging = false;

function startDrag(e) {
  if (!commentSection.classList.contains("show")) return;

  isDragging = true;
  startY = e.clientY;
  commentSection.style.transition = "none";
}

handle.addEventListener("touchstart", startDrag);
handle.addEventListener("mousedown", startDrag);

function drag(e) {
  if (!isDragging) return;

  currentY = e.clientY - startY;
  if (currentY > 0) {
    commentSection.style.transform = `translateY(${currentY}px)`;
  }
}

document.addEventListener("touchmove", drag);
document.addEventListener("mousemove", drag);

function stopDrag() {
  if (!isDragging) return;

  isDragging = false;

  if (currentY > 120) {
    commentSection.classList.remove("show");
    commentBtn.classList.remove("open");
    commentSection.style.transform = "";
  } else {
    commentSection.style.transform = "";
  }

  commentSection.style.transition = "";
  currentY = 0;
}

document.addEventListener("touchend", stopDrag);
document.addEventListener("mouseup", stopDrag);


