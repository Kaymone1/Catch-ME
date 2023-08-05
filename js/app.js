
const timeLeft = document.querySelector('#time');

const instrHolder = document.getElementById('howtoplay');

const instrBtn = document.getElementById('pressInstr');

instrBtn.addEventListener(`click`, () => {
    instrHolder.style.display = 'block';
    console.log("button clicked")
});

const quitBtn = document.getElementById('pressQuit');
quitBtn.addEventListener('click', () => {
    console.log('click works')
})

const score = document.querySelector('#score');
let points = 0

const pika = document.querySelector('.pikaRun');

const squares = document.querySelectorAll('.square');

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('pikaRun')
    })
    
    let quickAttack = squares[Math.floor(Math.random() * 16)]
    quickAttack.classList.add('pikaRun')
    console.log(quickAttack)
}
randomSquare()