const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


sidebarToggleBtn.onclick = function() {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('sidebar--mobile-active');
}

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');
btnShowMoreCards.addEventListener('click', function(){
hiddenCards.forEach( function (card) {
  card.classList.remove('card-link--hidden');
})
})