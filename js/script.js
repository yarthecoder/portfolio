const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const footerCopy = document.querySelector('.footer-copy');
const search = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-box input');


search.addEventListener('click', () => {
  search.classList.toggle('open');
  if (search.classList.contains('open')) {
    searchInput.focus(); // auto focus keyboard when opened
  }
});
searchInput.addEventListener('click', (e) => {
  e.stopPropagation();
});

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

footerCopy.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

