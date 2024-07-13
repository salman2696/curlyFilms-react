document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hamburger').addEventListener('click', function() {
        var menuList = document.getElementById('menuList');
        menuList.classList.toggle('active');
    });
  });
