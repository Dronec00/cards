let cards = document.querySelectorAll("button");
let lifes = document.getElementById("lifes");

let counterwin = 0;

function generate (winItem, winId) {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let minus = 5;
    let plus = 2;
    let win = 2 - winItem;
    if(winId){
        let idx = arr.indexOf(winId);
        arr.splice(idx, 1)
    }

    for (let i = 0; i < minus; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).setAttribute('data-type', '-');
        arr.splice(k, 1)

    }
    for (let i = 0; i < plus; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).setAttribute('data-type', '+');
        arr.splice(k, 1)

    }
    for (let i = 0; i < win; i++) {
        let k = Math.floor(Math.random()*(arr.length-1));
        document.getElementById(arr[k]).setAttribute('data-type', 'win');
        arr.splice(k, 1);
    }
};

generate(0, null)

cards.forEach((item) => item.addEventListener("click", (e)=>{
    item.classList.add('cards_item-active');
    let type = item.getAttribute("data-type");
    console.log(type);
    if(type === "-"){
        item.classList.add('cards_item-nonactive');
        lifes.innerHTML--;
        if(lifes.innerHTML === "0"){
            alert("loose");
            lifes.innerHTML = 3;
        };
        generate(0, null)
    } else if (type === "+") {
        item.classList.add('cards_item-nonactive');
        lifes.innerHTML++;
        generate(0, null);
    } else if (type === "win"){

        counterwin++
        item.classList.add('cards_item-win')
        if(counterwin === 2){
            alert("WIN")
            lifes.innerHTML = 3
        };
        generate(counterwin, item.id);
    }
}))