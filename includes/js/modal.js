const creditsModal = document.getElementById('creditsModal');
const creditsModalBtnOpen = document.getElementById('creditsBtnOpen');
const creditsModalBtnClose = document.getElementById('creditsBtnClose');

creditsModalBtnOpen.addEventListener('click', () => {
    creditsModal.classList.toggle('credits--hidden');
});

creditsModalBtnClose.addEventListener('click', () => {
    creditsModal.classList.toggle('credits--hidden');
});

const languagesModalBtnOpen = document.getElementById('languagesBtnOpen');
const languagesPopup = document.getElementById('languagesPopup');

if (document.documentElement.lang === 'pl') {
    languagesModalBtnOpen.textContent = 'PL';
} else {
    languagesModalBtnOpen.textContent = 'EN';
}

languagesModalBtnOpen.addEventListener('mouseenter', () => {
    languagesPopup.className = "footer__languages footer__languages--visible";
});

languagesModalBtnOpen.addEventListener('mouseleave', () => {
    languagesPopup.className = "footer__languages";
});

languagesPopup.addEventListener('mouseenter', () => {
   languagesPopup.className = "footer__languages footer__languages--visible";
});

languagesPopup.addEventListener('mouseleave', () => {
    languagesPopup.className = "footer__languages";
});

// HELP
const helpBtn = document.getElementById('helpButton');
const helpBox = document.getElementById('helpBox');
const helpIcon = document.getElementById('helpIcon');
helpBtn.addEventListener('click', () => {
    helpBox.classList.toggle('help--hidden');
    helpBtn.classList.toggle('help__button--active');
    helpIcon.classList.toggle('help__icon--active');
});