//HAMBURGUER BUTTON//
document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector('#menu');
    const titleHeader = document.querySelector('.title-header');
    const navigation = document.querySelector('.navigation');

    burgerButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        burgerButton.classList.toggle('open');
        titleHeader.classList.toggle('hidden');
    });
});
