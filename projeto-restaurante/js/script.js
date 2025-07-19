const buttomOpen = document.getElementById('buttom_menu_open')
const buttomClose = document.getElementById('buttom_menu_close')
const menuMobile = document.getElementById('menu_mobile')
menuMobile.style.display = 'none';
buttomClose.style.display = 'none';
function openMenu() {
    buttomOpen.style.display = 'none';
    buttomClose.style.display = 'block';
    menuMobile.style.display = 'flex';
}
function closeMenu() {
    buttomOpen.style.display = 'block';
    buttomClose.style.display = 'none';
    menuMobile.style.display = 'none';
}
