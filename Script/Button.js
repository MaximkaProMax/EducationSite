/* Когда пользователь кликает на кнопку, переключить между скрытием и показом выпадающего списка */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закрыть выпадающий список, если пользователь кликает за его пределами
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  