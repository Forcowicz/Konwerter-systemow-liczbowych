const menuButtonOpen = document.getElementById('menuBtnOpen');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu__item');
const menuList = document.getElementById('menuList');
const credits = document.getElementById('credits');
const contact = document.getElementById('contact');
const register = document.getElementById('register');
const login = document.getElementById('login');
const creditsBtnClose = document.getElementById('creditsBtnClose');
const contactBtnClose = document.getElementById('contactBtnClose');
const registerBtnClose = document.getElementById('registerBtnClose');
const loginBtnClose = document.getElementById('loginBtnClose');
const closeBtn = document.querySelectorAll('.closeBtn');

menuButtonOpen.addEventListener('click', () => {
   menu.classList.toggle('menu--hidden');
});

let menuActive;

menu.addEventListener('contextmenu', () => {
    menu.classList.toggle('menu--hidden');
    if(menuList.style.display === 'none') {
        setTimeout(() => {
            switch(menuActive) {
                case 'register':
                    switchMenu(register, true);
                    break;
                case 'login':
                    switchMenu(login, true);
                    break;
                case 'contact':
                    switchMenu(contact, true);
                    break;
                case 'credits':
                    switchMenu(credits, true);
                    break;
            }
        }, 150)
    }
});

closeBtn.forEach(element => {
    element.addEventListener('click', () => {
        menuList.style.display = 'flex';
        switch(element.id) {
            case 'creditsBtnClose':
                credits.classList.toggle('credits--hidden');
                break;
            case 'contactBtnClose':
                contact.classList.toggle('contact--hidden');
                break;
            case 'registerBtnClose':
                register.classList.toggle('register--hidden');
                break;
            case 'loginBtnClose':
                login.classList.toggle('login--hidden');
        }
    });
});

menuItems[0].addEventListener('click', () => {
    switchMenu(register, false);
});

menuItems[1].addEventListener('click', () => {
   switchMenu(login, false);
});

menuItems[2].addEventListener('click', () => {
    switchMenu(contact, false);
});

menuItems[3].addEventListener('click', () => {
    switchMenu(credits, false);
});

function switchMenu(element, reset) {
    reset === true ? menuList.style.display = 'flex' : menuList.style.display = 'none';
    element.classList.toggle(`${element.id}--hidden`);
    menuActive = element.id;
}