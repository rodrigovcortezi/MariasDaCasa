var buttonActive = false;
const menuButton = document.getElementById('menu-icon');
menuButton.addEventListener('click', function() {
    const header = document.getElementsByTagName('header')[0];
    const nav = document.getElementsByTagName('nav')[0];
    if(buttonActive) {
	nav.style.height = '60px'
	header.style.height = '60px';
    } else {
	header.style.height = '100%';
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
