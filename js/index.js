const burgerBtn = document.querySelector('.coffee__menu__phone');
const burgerMenu = document.querySelector('.burger__menu');

burgerBtn.addEventListener('click', () => {
    burgerMenu.style.display = 'flex';
    burgerMenu.classList.toggle('burger--active');
})









