const menuButtonOpen = document.getElementById('menuBtnOpen');
const menu = document.getElementById('menu');
const menuItems = document.getElementsByClassName('menu__item');
const menuList = document.getElementById('menuList');
const credits = document.getElementById('credits');
const creditsBtnClose = document.getElementById('creditsBtnClose');

menuButtonOpen.addEventListener('click', () => {
   menu.classList.toggle('menu--hidden');
});

menu.addEventListener('contextmenu', () => {
    menu.classList.toggle('menu--hidden');
    if(menuList.style.display === 'none') {
        setTimeout(() => {
            reset(credits);
        }, 200);
    }
});

menuItems[3].addEventListener('click', () => {
    menuList.style.display = 'none';
    credits.classList.toggle('credits--hidden');
});

creditsBtnClose.addEventListener('click', () => {
    menuList.style.display = 'flex';
    credits.classList.toggle('credits--hidden');
});

function reset(element) {
    menuList.style.display = 'flex';
    element.classList.toggle(`${element.id}--hidden`);
}