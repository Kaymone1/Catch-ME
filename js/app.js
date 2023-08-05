
const timeLeft = document.querySelector('#time');
let timer = 60;

const instrHolder = document.getElementById('howtoplay');

const instrBtn = document.getElementById('pressInstr');

instrBtn.addEventListener(`click`, () => {
    instrHolder.style.display = 'block';
    console.log("button clicked")
});

// const quitBtn = document.getElementById('pressQuit');

// quitBtn.addEventListener('click', () => {
    // let quitter = prompt("Are you sure you want to quit?")
    // const answer = () => {
    //     if(quitter === 'yes') {

    // }
//     console.log('click works')
// })

const score = document.querySelector('#score');
let points = 0

const pika = document.querySelector('.pikaRun');
let speed = 1800; //initial speed

const squares = document.querySelectorAll('.square');

// let hitSpot = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('pikaRun')
    })
    
    let quickAttack = squares[Math.floor(Math.random() * 16)]
    quickAttack.classList.add('pikaRun')
    console.log(quickAttack)
}
randomSquare()

// function pikaMove() {
//     let timerId = null
//     timerId = setInterval(randomSquare, 1000)
// }
// pikaMove()
