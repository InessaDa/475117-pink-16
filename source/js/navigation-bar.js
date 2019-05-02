var menu = document.querySelector('.navigation-list');
var closeButton = document.querySelector('.close-button__icon');
var menuButton = document.querySelector('.menu-button__icon');
var header = document.querySelector('.header');
var page = document.querySelector('.page');

menu.classList.add('navigation-list--hidden');
header.classList.add('header--closed-menu');
closeButton.classList.add('close-button__icon--hidden');


menuButton.addEventListener("click", function (_event) {
  menu.classList.remove('navigation-list--hidden');
  header.classList.remove('header--closed-menu');
  menuButton.classList.add('menu-button__icon--hidden');
  closeButton.classList.remove('close-button__icon--hidden');
  page.classList.add('page--padding');
});

closeButton.addEventListener("click", function(_event) {
  menu.classList.add('navigation-list--hidden');
  header.classList.add('header--closed-menu');
  closeButton.classList.add('close-button__icon--hidden');
  menuButton.classList.remove('menu-button__icon--hidden');
  page.classList.remove('page--padding');
})
