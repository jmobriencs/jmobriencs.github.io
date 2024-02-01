const navbar = document.querySelector('.navbar');
const navBarJMLogo = document.querySelector('.navbar-brand');
const navbarMenu = document.querySelector('#navbarSupportedContent');
const section = document.querySelectorAll('section');


// NOTE for future JM: The "show" class is automatically added by Bootstrap to the "#navbarSupportedContent" element when the hamburger menu button is clicked to display the menu. Removing the "show" class hides the menu and restores the hamburger menu icon.

// Hides the submenu once a submenu item is clicked
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('show');
});

// Special handling for JM O'Brien logo as it is not part of the navbarMenu
navBarJMLogo.addEventListener('click', () => {
  navbarMenu.classList.remove('show');
});


// On scroll navbar turns solid black once screen moves beyond loaded viewport
window.onscroll = function() {
    var top = window.scrollY;
    if (top >=100) {
        navbar.classList.add('navbarDark');
    } else {
        navbar.classList.remove('navbarDark');
    }
}