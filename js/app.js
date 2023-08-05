const squares = document.querySelectorAll('.square')

const pika = document.querySelector('.pikaRun')

const timeLeft = document.querySelector('#time')

const score = document.querySelector('#score')

let points = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('pikaRun')
    })
    
    let randomPos = squares[Math.floor(Math.random() * 16)]
    console.log(randomPos)
}
randomSquare()