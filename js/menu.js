// window.addEventListener("DOMContentLoaded", () => {

    const modalOverlay = document.querySelector(".modal__overlay");
    const modal = document.querySelector(".modal__coffee__one");
    const btnCoffee = document.querySelector(".coffee");
    const btnTea = document.querySelector(".tea");
    const btnDessert = document.querySelector(".dessert");
    const cardsCoffee = document.querySelectorAll(".card__coffee");
    const cardsTeas = document.querySelectorAll(".card__tea");
    const cardsDesserts = document.querySelectorAll(".card__dessert");
    const btnsSize = document.querySelectorAll('.btns__size');
    const modalBtnActive = document.querySelector('.modal--btn--active');
    const btnSize = document.querySelector('.btn__size');

    function closeModal(e) {
        e.style.display = "none"
    };

    function openModal(e) {
        e.style.display = "block"
    }

    function modalStartBtn() {
        if (modal.style.display = 'none') {
            sizeOne.classList.add('modal--btn--active');
            sizeTwo.classList.remove('modal--btn--active');
            sizeThree.classList.remove('modal--btn--active');
        }
        
        if (modal.style.display = 'none') {
            additiveOne.classList.remove('modal--btn--active');
            additiveTwo.classList.remove('modal--btn--active');
            additiveThree.classList.remove('modal--btn--active');
        }

    }

    btnCoffee.addEventListener('click', () => {
        cardsCoffee.forEach((e) => {
            openModal(e);
        })
    
        cardsTeas.forEach((e) => {
            closeModal(e);
        })
    
        cardsDesserts.forEach((e) => {
            closeModal(e);
        })
    
        btnCoffee.classList.add("btn--active");
        btnTea.classList.remove("btn--active");
        btnDessert.classList.remove("btn--active");
        
    })
    
    btnTea.addEventListener('click', () => {
        cardsCoffee.forEach((e) => {
            e.style.display = "none"
        })
    
        cardsTeas.forEach((e) => {
            e.style.display = "block"
        })
    
        cardsDesserts.forEach((e) => {
            e.style.display = "none"
        })
    
        btnCoffee.classList.remove("btn--active");
        btnTea.classList.add("btn--active");
        btnDessert.classList.remove("btn--active");
    
    
    })
    
    btnDessert.addEventListener('click', () => {
        cardsCoffee.forEach((e) => {
            closeModal(e);
        })
    
        cardsTeas.forEach((e) => {
            closeModal(e);
        })
    
        cardsDesserts.forEach((e) => {
            openModal(e);
        })

        btnCoffee.classList.remove("btn--active");
        btnTea.classList.remove("btn--active");
        btnDessert.classList.add("btn--active");
    
    })
    

    cardsCoffee.forEach((e) => {
        e.addEventListener('click', () => {
            modalOverlay.style.display = "block";
            modal.style.display = "flex";
        })
    })

    document.querySelector('.modal__btn').addEventListener('click', () => {
        modalOverlay.style.display = "none";
        modal.style.display = "none";
        modalStartBtn();
    })


    modalOverlay.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        modal.style.display = 'none';
        modalStartBtn();
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            modalOverlay.style.display = "none";
            modal.style.display = "none";
            modalStartBtn();
        }
    })

        
    const sizeOne = document.querySelector('.size__one');
    const sizeTwo = document.querySelector('.size__two');
    const sizeThree = document.querySelector('.size__three');

    const additiveOne = document.querySelector('.additive__one');
    const additiveTwo = document.querySelector('.additive__two');
    const additiveThree = document.querySelector('.additive__three');

    sizeOne.addEventListener('click', () => {
        sizeOne.classList.add('modal--btn--active');
        sizeTwo.classList.remove('modal--btn--active');
        sizeThree.classList.remove('modal--btn--active');
    })

    sizeTwo.addEventListener('click', () => {
        sizeOne.classList.remove('modal--btn--active');
        sizeTwo.classList.add('modal--btn--active');
        sizeThree.classList.remove('modal--btn--active');
        
    })

    sizeThree.addEventListener('click', () => {
        sizeOne.classList.remove('modal--btn--active');
        sizeTwo.classList.remove('modal--btn--active');
        sizeThree.classList.add('modal--btn--active');
    })
    
    
    additiveOne.addEventListener('click', () => {
        additiveOne.classList.add('modal--btn--active');
        additiveTwo.classList.remove('modal--btn--active');
        additiveThree.classList.remove('modal--btn--active');
    })

    additiveTwo.addEventListener('click', () => {
        additiveOne.classList.remove('modal--btn--active');
        additiveTwo.classList.add('modal--btn--active');
        additiveThree.classList.remove('modal--btn--active');
    })

    additiveThree.addEventListener('click', () => {
        additiveOne.classList.remove('modal--btn--active');
        additiveTwo.classList.remove('modal--btn--active');
        additiveThree.classList.add('modal--btn--active');
    })
    
    

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
    

    
// })
