const switchBtn = document.querySelector("#switchBtn");
const light = document.querySelector("#light");
const div = document.querySelector("div");

switchBtn.addEventListener("click", () => {
    light.classList.toggle("on");
    switchBtn.classList.toggle("on");
    div.classList.toggle("on");
});


const likeBtn = document.querySelector("#likeBtn");
const likeCount = document.querySelector("#likeCount");

likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
    if (likeBtn.classList.contains("liked")) {
        likeBtn.textContent = "❤️ Liked";
    } else {
        likeBtn.textContent = "🤍 Like";
    }
});