let cards = document.querySelectorAll("button");
let lifes = document.getElementById("lifes");

let counterwin = 0;
let cardwin = []; // будем сюда складывать карточки, которые угадались

function generate (winItem, winId) {
    let indexCards = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let minus = 5;
    let plus = 2;
    let win = 2 - winItem;

    if(cardwin.length){
        cardwin.forEach(item => {
            let idx = indexCards.indexOf(item);
            indexCards.splice(idx, 1)
        })
    } // вырезаем карточки из генерации, если они были выиграшные из массива

    for (let i = 0; i < minus; i++) {
        let k = Math.floor(Math.random()*(indexCards.length));
        document.getElementById(indexCards[k]).setAttribute('data-type', '-');
        indexCards.splice(k, 1);

    } // генерация карт, в которых теряем жизнь
    for (let i = 0; i < plus; i++) {
        let k = Math.floor(Math.random()*(indexCards.length));
        document.getElementById(indexCards[k]).setAttribute('data-type', '+');
        indexCards.splice(k, 1);

    } // генерация карт, в которых добавляем жизнь
    if(cardwin.length === 2) return
    for (let i = 0; i < win; i++) {
        document.getElementById(indexCards[i]).setAttribute('data-type', 'win');
    } // генерация карт, которые нужно угадать
};

generate(0, null);

cards.forEach((item) => item.addEventListener("click", (e)=>{
    item.classList.add('cards_item-active');
    let type = item.getAttribute("data-type");
    let id = item.id;
    if(cardwin.includes(id)) return; // ничего не делать, если карточку уже угадали
    if(type === "-"){
        item.classList.add('cards_item-minus')
        lifes.innerHTML--;
        if(lifes.innerHTML === "0"){
            alert("loose");
            lifes.innerHTML = 3;
        };
        setTimeout(()=>{
            document.getElementById(id).classList.remove('cards_item-minus');
            document.getElementById(id).classList.add('cards_item-active');
        }, 500)
        generate(0, null)
    } else if (type === "+") {
        item.classList.add('cards_item-plus')

        setTimeout(()=>{
            document.getElementById(id).classList.remove('cards_item-plus');
            document.getElementById(id).classList.add('cards_item-active');
        }, 500)
        lifes.innerHTML++;
        generate(0, null);
    } else if (type === "win"){
        counterwin++
        cardwin.push(id)
        item.classList.add('cards_item-win')
        if(counterwin === 100){
            alert("WIN")
            lifes.innerHTML = 3;
        };
        generate(counterwin, item.id);
    }
}))