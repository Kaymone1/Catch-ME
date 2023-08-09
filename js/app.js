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

const timeLeft = document.querySelector('#time');
let timer = 60;

let countDownTimer = setInterval(timer, 1000)

const pika = document.querySelector('.pikaRun');
let speed = 1800; //initial speed

let hitSpot

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitSpot) {
        result++
        score.textContent = result
        hitSpot = null
      }
      console.log(`Square clicked${squares}`)
    })
  })



  function timeDown() {
    timer--;
    timeLeft.textContent = timer
    console.log(`${timer} seconds`)

    if (timer == 0) {
        clearInterval(countDownTimer)
        clearInterval(timer)
        alert('GAME OVER! Your final score is ' + result)
      }
}
timeDown()

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('pikaRun')
    })
    
    let quickAttack = squares[Math.floor(Math.random() * 16)]
    quickAttack.classList.add('pikaRun')
    console.log(quickAttack)

    hitSpot = randomSquare.id 
}
randomSquare()

function pikaMove() {
    timer = setInterval(randomSquare, 1000)
}
pikaMove()
