// Get the score and time elements
const scoreHlder = document.getElementById('score');
const timeHlder = document.getElementById('time');

// Get the start and quit buttons
const startBtn = document.getElementById('startbutton');
const quitBtn = document.getElementById('pressQuit');

//pikachu's image that will glide around the board
const pika = document.querySelector('.pikaRun');

// Get all the squares so I can manipulate them
const sqrs = document.querySelectorAll('.square');

// initialize variables the fun begins
//I want to track players score/time need a variable
let score = 0;
let timeLeft = 30; //seconds timer


//tracking pikachus movements; this will be what i manipulate to change his speed
let pikaMvmentTime = null;

// starting pika speed in 4.5 seconds? will be testig time to see
//what time intervals would be best to start pikas movements in milliseconds
let pikaSpeed = 4000; 

// Function to update the score, i created the score board with text so change text
//I target score with textContent
function upScore() {
    scoreHlder.textContent = score;
  }

// Function to update the time
function upTime() {
    timeHlder.textContent = timeLeft;
  }

// Function to handle a square click
//event will be the click
function squareClick(event) {

    //condition of what happens when player clicks pikaRun; target will be .pikaRun
    // classlist to bring the domtokenlist of pikarun (method i want to interact with)
    //I am checking that only img in square is clicked
    if (event.target.classList.contains('pikaRun')) { 
      score += 1;
      console.log('pikachu has been caught')
      upScore();
      event.target.classList.remove('pikaRun');
      pikaMove();
    }
  }

// Function to move pika
function pikaMove() {
    // Remove pikaRun class from all squares
    sqrs.forEach(square => square.classList.remove('pikaRun'));
  
    // Randomize a square to place pika everytime he moves
    const randomIndex = Math.floor(Math.random() * sqrs.length);
    const randomSquare = sqrs[randomIndex];
    randomSquare.classList.add('pikaRun');
  
    // Speed up pikas movement
    pikaSpeed -= 10;
    clearInterval(pikaMvmentTime);
    pikaMvmentTime = setInterval(pikaMove, pikaSpeed);
    console.log("pika moving faster");
}

  // Function to start the game
function startGame() {
    score = 0;
    timeLeft= 30;
    currentPlyer = 0;
    pikaSpeed = 1000;
    upScore();
    upTime();

// Clear existing interval (if any)
clearInterval(pikaMvmentTime);

// Set up the game timer interval
const timerIntervalId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft -= 1;//go down by 1 second
      upTime();
    } else {
      clearInterval(timerIntervalId);
      clearInterval(pikaMvmentTime);
      announceWinner();
    }
  }, 1000);

  pikaMove();
}

  // Attach click event listeners to squares
sqrs.forEach(square => square.addEventListener('click', squareClick));

// Attach click event listener to the "Start" button
startBtn.addEventListener('click', () => {
  startGame();
});

// Attach click event listener to the "Quit" button
quitBtn.addEventListener('click', () => {
  clearInterval(pikaMvmentTime);
  announceWinner();
  startGame()
    console.log('game reset')
});
