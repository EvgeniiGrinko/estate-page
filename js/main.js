//Добавляем полифилл for Nodelist.forEach() для IE 11 
if (typeof Array.prototype.forEach != "function") {
  Array.prototype.forEach = function(callback) {
      for (var i = 0; i < this.length; i++) {
          callback.apply(this, [this[i], i, this]);
      }
  };
}
/*Filter on mobile devices */
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Клик по кнопке для скрытия и показа фильтра и переворачиваня иконки
sidebarToggleBtn.onclick = function() {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('sidebar--mobile-active');
}
/*Show 3 more cards */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');
btnShowMoreCards.addEventListener('click', function(){
hiddenCards.forEach( function (card) {
  card.classList.remove('card-link--hidden');
})
});
/*Show hide content inside widgets*/
const widgets = document.querySelectorAll('.widget');
/* Находим все виджеты по странице, слушаем 
клик внутри виджета, если клик по заголовку 
скрываем или показываем тело виджета */
widgets.forEach(function(widget){
  widget.addEventListener('click', function (e) {
  if (e.target.classList.contains('widget__title')){
    e.target.classList.toggle('widget__title--active')
    e.target.nextElementSibling.classList.toggle('widget__body--hidden');
  }
  })
},);

/* Location - button Любая*/

const checkboxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

//Выбор кнопки Любая - и отключение других чекбоксов
checkboxAny.addEventListener('change', function(){
  if (checkboxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
    

  } 

});
// Клик по другим кнопкам в location, отключаем кнокпку Любая при выборе других параметров
topLocationCheckboxes.forEach(function(item) {
  item.addEventListener('change', function() {
    if(checkboxAny.checked){
      checkboxAny.checked = false;
    }
    
  })
})

/* Показать еще 3 доп опции в фльтре*/
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckboxes = document.querySelectorAll('.checkbox--hidden');
showMoreOptions.onclick = function(e){
  e.preventDefault();
//Если блоки были скрыты - показываем
  if(showMoreOptions.dataset.options == "hidden") {
    hiddenCheckboxes.forEach(function(item){
      item.style.display = 'block';
    });
    showMoreOptions.innerText = "Скрыть дополнительные опции";
    showMoreOptions.dataset.options = "visible";
  } 
  // Если блоки были видны - скрываем
  else if (showMoreOptions.dataset.options = "visible") {
    hiddenCheckboxes.forEach(function(item){
      item.style.display = 'none';
    });
    showMoreOptions.innerText = "Показать еще";
    showMoreOptions.dataset.options = "hidden";
  }

}