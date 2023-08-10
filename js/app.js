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
let timeLeft = 60; //seconds timer
//players will begin at 0pts this reps who is going at the time
let currentPlyer = 0;
//tracking pikachus movements; this will be what i manipulate to change his speed
let pikaMvmentTime = null;

// starting pika speed in 4.5 seconds? will be testig time to see
//what time intervals would be best to start pikas movements
let pikaSpeed = 4500; 

// Function to update the score, i created the score board with text so change text
//I target score with textContent
function upScore() {
    scoreElement.textContent = score;
  }

// Function to update the time
function upTime() {
    timeElement.textContent = timeLeft;
  }

// Function to handle a square click
//event will be the click
function squareClick(event) {

    //condition of what happens when player clicks pikaRun; target will be .pikaRun
    // classlist to bring the domtokenlist of pikarun (method i want to interact with)
    //I am checking that only img in square is clicked
    if (event.target.classList.contains('.pikaRun')) { 
      score += 1;
      console.log('pikachu has been caught')
      updateScore();
      event.target.classList.remove('.pikaRun');
      pikaMove();
    }
  }

// Function to move pika
function pikaMove() {
    // Remove pikaRun class from all squares
    squares.forEach(square => square.remove(pika)); 
  
    // Randomize a square to place pika everytime he moves
    const randomIndex = Math.floor(Math.random() * squares.length);
    const randomSquare = squares[randomIndex];
    randomSquare.add(pika); 
  
    // Speed up pikas movement
    pikaSpeed -= 10;
    clearInterval(pikaMvmentTime);
    moleIntervalId = setInterval(pikaMove, pikaSpeed);
    console.log("pika moving faster")
  }
  