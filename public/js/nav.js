const menuButton = document.getElementById('menu-icon');
menuButton.addEventListener('click', function() {
    const header = document.getElementsByTagName('header')[0];
    const nav = document.getElementsByTagName('nav')[0];
    header.style.height = '100%';
    nav.style.height = '100%';
});
