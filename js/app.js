let cards = document.querySelectorAll("button");
let lifes = document.getElementById("lifes");

let counterwin = 0

function generate () {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    let minus = 5;
    let plus = 2;
    let win = 2;
    for (let i = 0; i < minus; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).innerHTML = "-";
        arr.splice(k, 1)

    }
    for (let i = 0; i < plus; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).innerHTML = "+";
        arr.splice(k, 1)

    }
    for (let i = 0; i < win; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).innerHTML = "угадал";
        arr.splice(k, 1);
    }
}
generate()

cards.forEach((item) => item.addEventListener("click", (e)=>{
    item.classList.add('cards_item-active')
    if(item.innerHTML === "-"){
        item.classList.add('cards_item-nonactive')
        lifes.innerHTML--
        if(lifes.innerHTML === "0"){
            alert("loose")
            lifes.innerHTML = 3
        }
    } else if (item.innerHTML === "+") {
        item.classList.add('cards_item-nonactive')
        lifes.innerHTML++
    } else if (item.innerHTML === "угадал"){
        counterwin++
        item.classList.add('cards_item-nonactive')
        if(counterwin === 2){
            alert("WIN")
            lifes.innerHTML = 3
        }
    }
}))