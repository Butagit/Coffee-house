const btnCoffee = document.querySelector(".coffee");
const btnTea = document.querySelector(".tea");
const btnDessert = document.querySelector(".dessert");
const cardsCoffee = document.querySelectorAll(".card__coffee");
const cardsTeas = document.querySelectorAll(".card__tea");
const cardsDesserts = document.querySelectorAll(".card__dessert");

window.addEventListener("DOMContentLoaded", () => {

    btnCoffee.addEventListener('click', () => {
        cardsCoffee.forEach((i) => {
            i.style.display = "block"
        })
    
        cardsTeas.forEach((i) => {
            i.style.display = "none"
        })
    
        cardsDesserts.forEach((i) => {
            i.style.display = "none"
        })
    
        btnCoffee.classList.add("btn--active");
        btnTea.classList.remove("btn--active");
        btnDessert.classList.remove("btn--active");
        
    })
    
    btnTea.addEventListener('click', () => {
        cardsCoffee.forEach((i) => {
            i.style.display = "none"
        })
    
        cardsTeas.forEach((i) => {
            i.style.display = "block"
        })
    
        cardsDesserts.forEach((i) => {
            i.style.display = "none"
        })
    
        btnCoffee.classList.remove("btn--active");
        btnTea.classList.add("btn--active");
        btnDessert.classList.remove("btn--active");
    
    
    })
    
    btnDessert.addEventListener('click', () => {
        cardsCoffee.forEach((i) => {
            i.style.display = "none"
        })
    
        cardsTeas.forEach((i) => {
            i.style.display = "none"
        })
    
        cardsDesserts.forEach((i) => {
            i.style.display = "block"
        })
    
        btnCoffee.classList.remove("btn--active");
        btnTea.classList.remove("btn--active");
        btnDessert.classList.add("btn--active");
    
    })
    
})
