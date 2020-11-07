const creditsModal = document.getElementById('creditsModal');
const creditsModalBtnOpen = document.getElementById('creditsBtnOpen');
const creditsModalBtnClose = document.getElementById('creditsBtnClose');

creditsModalBtnOpen.addEventListener('click', () => {
    creditsModal.classList.toggle('credits-hidden');
});

creditsModalBtnClose.addEventListener('click', () => {
    creditsModal.classList.toggle('credits-hidden');
});
