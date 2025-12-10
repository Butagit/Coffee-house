const burgerBtn = document.querySelector('.coffee__menu__phone');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelectorAll('.navigation');

burgerBtn.addEventListener('click', () => {
    burgerMenu.style.display = 'flex';
    burgerMenu.classList.toggle('burger--active');
})

nav.forEach(btn => {
    btn.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
        burgerMenu.classList.toggle('burger--active');
    })
})









