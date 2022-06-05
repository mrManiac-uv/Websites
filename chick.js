// ---- Color changing Background ----

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${b}, ${g})`;
}
// document.body.addEventListener('click', function () {
//     
//     document.querySelector('h1').style.color = `rgb(${r - 100}, ${b - 100}, ${g - 100})`;
//     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     if ((r + g) > 400 || (r + b) > 400 || (b + g) > 400) {
//         document.body.style.color = 'black'
//     }
//     else if ((r + g) < 400 || (r + b) < 400 || (b + g) < 400) {
//         document.body.style.color = 'white'
//     }
// })


// ---- Grocery List ----

const form = document.querySelector('#grocerylist');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const Product = form.elements.product;
    const Quantity = form.elements.qty;
    const list = document.createElement('li');
    list.innerText = `${Quantity.value} ${Product.value}s`;
    document.querySelector('#list').appendChild(list);
    Product.value = '';
    Quantity.value = '';
});


// ---- Score Keeper ----

const p1 = document.querySelector('#p1win');
const score1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2win');
const score2 = document.querySelector('#p2');
const reset = document.querySelector('#reset');
const playTo = document.querySelector('#playTo')
let counter1 = 0, counter2 = 0, winscore = 5, game = true;
p1.addEventListener('mousedown', function () {
    if (game) {
        counter1++;
        if (counter1 == winscore) {
            game = false;
            p1.innerHTML = 'WINNER!';
            p2.innerText = 'LOSER!';
        }
        score1.innerText = counter1;
    }
})
p2.addEventListener('mousedown', function () {
    if (game) {
        counter2++;
        if (counter2 == winscore) {
            game = false;
            p2.innerHTML = 'WINNER!';
            p1.innerText = 'LOSER!';
        }
        score2.innerText = counter2;
    }
})
reset.addEventListener('click', resetAll)

playTo.addEventListener('change', function () {
    winscore = parseInt(this.value);
    if (!game)
        resetAll();
})

function resetAll() {
    game = true;
    p1.innerHTML = '+1';
    p2.innerText = '+1';
    counter1 = counter2 = score1.innerText = score2.innerText = 0;
}


// ---- Colored Buttons ----

const colorButtons = document.querySelector('#colorButtons');
for (let i = 0; i < 50; i++) {
    const button = document.createElement('button');
    button.innerText = "Colorize"
    button.classList.add('bigButton');
    colorButtons.appendChild(button);
    button.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}