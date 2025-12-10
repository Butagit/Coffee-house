const burgerBtn = document.querySelector('.coffee__menu__phone');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelectorAll('.navigation');

burgerBtn.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger--active');
    if (burgerMenu.classList.contains('burger--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})

nav.forEach(btn => {
    btn.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger--active');
    })
})











