var buttonActive = false;
const menuButton = document.getElementById('menu-icon');
const nav = document.getElementsByTagName('nav')[0];
const navHeight = window.getComputedStyle(nav, null).height;
menuButton.addEventListener('click', function() {
    const header = document.getElementsByTagName('header')[0];
    if(buttonActive) {
	nav.style.height = navHeight; 
    } else {
	nav.style.height = '100%';
    }

    buttonActive = !buttonActive;
});

window.onresize = function() {
    const header = document.getElementsByTagName('header')[0];
    const nav = document.getElementsByTagName('nav')[0];
    header.style.height = '';
    nav.style.height = '';
    buttonActive = false;
}
