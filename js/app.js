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
let score = [0, 0]; 
let timeLeft = 30; //seconds timer

//tracking pikachus movements; this will be what i manipulate to change his speed
let pikaMvmentTime = null;

// make empty interval variable maybe this will be easier to work with
let timerIntervalId = null;

//create players and outcome var
let currentPlayer = 0 //this is the starting player

const players = ['player 1', 'player 2'];

//need a turn ender function to show the switches
function endTurn() {
  currentPlayer = 1 - currentPlayer //switch btwn indexes 0 and 1
  //switch
  alert(`TIMES UP! Its ${players[currentPlayer]}'s turn`)
  //resetting
  clearInterval(pikaMvmentTime)
  timer = 30;
  pikaSpeed = 4000;
  pikaMvmentTime = 1000;

  //tracking next player turn 
  console.log(`It's ${players[currentPlayer]}'s turn!`);

//This should go to next player without reset whole game
 // Check if both players have completed their turns
 if (currentPlayer === 0) {
  console.log("Both players have completed their turns.");
//make this function to check for winner
  const winner = findWinner();
  if (winner !== "It's a tie!") {
    alert(`Congrats! You were able to keep up, ${winner} wins!`);
  } else {
    alert("It's a tie! Play another round");
  }

  pikaMove();
  }
}

function resetGame() {
  score = [0, 0]; // Reset scores for both players
  timeLeft = 30;
  pikaSpeed = 4000; // Reset to initial speed
  upScore();
  upTime();
  //RESET movement and timer.
  clearInterval(pikaMvmentTime);
  clearInterval(timerIntervalId);

  // Show whos playing with concatenating
  console.log("game reset");

  // Reset the game timer interval
  timerIntervalId = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft -= 1; // Go down by 1 second
      upTime();
    } else {
      clearInterval(timerIntervalId);
      console.log("game starting over")
    }
  }, 1000);

  pikaMove();
}

// starting pika speed in 4.5 seconds? will be testig time to see
//what time intervals would be best to start pikas movements in milliseconds
let pikaSpeed = 4000; 

// Function to update the score, i created the score board with text so change text
//I target score with textContent
function upScore() {
  //had to change it to a string to to update my array
  scoreHlder.textContent = `Player 1: ${score[0]} | Player 2: ${score[1]}`;
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
      score[currentPlayer] += 1; //update adding player
      console.log('pikachu has been caught')
      upScore();
      //removing pika from square for him to move around
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
    timeLeft= 30;
    pikaSpeed = 1000;
    upTime();

// Clear existing interval (if any)
clearInterval(pikaMvmentTime);
clearInterval(timerIntervalId);

//show whos playing with concatenating
console.log("It's" + players[currentPlayer] + "turn!")

// Set up the game timer interval
timerIntervalId = setInterval(() => {
  //need to make sure timer reset but doesnt keep going
    if (timerIntervalId && timeLeft > 0) {
      timeLeft -= 1;//go down by 1 second
      upTime();
    } else {
      clearInterval(timerIntervalId);
      if (timerIntervalId) {
        endTurn();
      }
    }
  }, 1000);

  pikaMove();
}

  // Attach click event listeners to squares
sqrs.forEach(square => square.addEventListener('click', squareClick));

// Attach click event listener to the "Start" button
startBtn.addEventListener('click', () => {
  startGame();
  console.log("game starting")
});

// Attach click event listener to the "Quit" button
quitBtn.addEventListener('click', () => {
  clearInterval(pikaMvmentTime);
  clearInterval(timerIntervalId)
    console.log('Player quit')
    resetGame();
});

function findWinner() {
  if (score[0] > score[1]) {
    return players[0];
    
  } else if (score[1] > score[0]) {
    return players[1];
  } else {
    return "It's a tie!";
  }
}

