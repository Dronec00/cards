let cards = document.querySelectorAll("button");
let lifes = document.getElementById("lifes");

cards.forEach((item) => item.addEventListener("click", (e)=>{
    item.classList.add('cards_item-active')
}))