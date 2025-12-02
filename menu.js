const btnCoffee = document.querySelector(".coffee");
const btnTea = document.querySelector(".tea");
const btnDessert = document.querySelector(".dessert");
const cardsCoffee = document.querySelectorAll(".card__coffee");
const cardsTeas = document.querySelectorAll(".card__tea");
const cardsDesserts = document.querySelectorAll(".card__dessert");
const btnActive = document.querySelector(".btn--active");

btnCoffee.addEventListener('click', (e) => {
    cardsCoffee.forEach((i) => {
        i.style.display = "block"
    })

    cardsTeas.forEach((i) => {
        i.style.display = "none"
    })

    cardsDesserts.forEach((i) => {
        i.style.display = "none"
    })

    btnActive.classList.add();
})

btnTea.addEventListener('click', (e) => {
    cardsCoffee.forEach((i) => {
        i.style.display = "none"
    })

    cardsTeas.forEach((i) => {
        i.style.display = "block"
    })

    cardsDesserts.forEach((i) => {
        i.style.display = "none"
    })

    btnActive.classList.add();

})

btnDessert.addEventListener('click', (e) => {
    cardsCoffee.forEach((i) => {
        i.style.display = "none"
    })

    cardsTeas.forEach((i) => {
        i.style.display = "none"
    })

    cardsDesserts.forEach((i) => {
        i.style.display = "block"
    })

    btnActive.classList.add();

})

