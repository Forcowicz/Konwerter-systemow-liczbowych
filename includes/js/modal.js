const creditsModal = document.getElementById('creditsModal');
const creditsModalBtnOpen = document.getElementById('creditsBtnOpen');
const creditsModalBtnClose = document.getElementById('creditsBtnClose');

creditsModalBtnOpen.addEventListener('click', () => {
    creditsModal.classList.toggle('credits-hidden');
});

creditsModalBtnClose.addEventListener('click', () => {
    creditsModal.classList.toggle('credits-hidden');
});

const languagesModalBtnOpen = document.getElementById('languagesBtnOpen');
const languagesPopup = document.getElementById('languagesPopup');

if (document.documentElement.lang === 'pl') {
    languagesModalBtnOpen.textContent = 'PL';
} else {
    languagesModalBtnOpen.textContent = 'EN';
}

languagesModalBtnOpen.addEventListener('mouseenter', () => {
    languagesPopup.className = "languages languages-visible";
});

languagesModalBtnOpen.addEventListener('mouseleave', () => {
    languagesPopup.className = "languages";
});

languagesPopup.addEventListener('mouseenter', () => {
   languagesPopup.className = "languages languages-visible";
});

languagesPopup.addEventListener('mouseleave', () => {
    languagesPopup.className = "languages";
});
