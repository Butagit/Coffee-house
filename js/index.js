const burgerBtn = document.querySelector('.coffee__menu__phone');
const burgerMenu = document.querySelector('.burger__menu');
const nav = document.querySelectorAll('.navigation');

burgerBtn.addEventListener('click', () => {
    burgerMenu.style.display = 'flex'
    burgerMenu.classList.toggle('burger--active');
    if (burgerMenu.classList.contains('burger--active')) {
        document.body.style.overflow = 'hidden';
    } else {
        burgerMenu.style.display = 'none'
    }
})

nav.forEach(btn => {
    btn.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger--active');
        document.body.style.overflow = '';

    })
})











