const squares = document.querySelectorAll('.square')

const pika = document.querySelector('.pikaRun')

const timeLeft = document.querySelector('#time')

const score = document.querySelector('#score')

let points = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('pikaRun')
    })
    
    let quickAttack = squares[Math.floor(Math.random() * 16)]
    quickAttack.classList.add('pikaRun')
    console.log(quickAttack)
}
randomSquare()