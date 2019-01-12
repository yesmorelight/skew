const menuButton = document.querySelector('.menu-link');
const menu = document.querySelector('.menu');

 menuButton.addEventListener("click", function() {
     menu.classList.toggle('open');
 });