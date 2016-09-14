document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector(".mobile-menu-icon");
    menu.onclick = function() {
      var links = document.querySelector(".nav-links");
      links.classList.toggle('active');
      this.classList.toggle('open');
    };
});
