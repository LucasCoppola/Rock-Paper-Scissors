
const elements = document.querySelectorAll('input')
const playerScore = document.getElementById('player-score')
const computerScore = document.getElementById('computer-score')
const computerDisplay = document.getElementById('computer-display')
const playerDisplay = document.getElementById('player-display')
const textDisplay = document.getElementById('text-display')
const selectScore = document.getElementById('select-score')
const resetBtn = document.getElementById('reset-btn')

let computerChoice
let playerChoice
let result

let playerCount = 0
let computerCount = 0

let isGameOver = false
let winningScore = 3

// Events Listeners
elements.forEach((e) => {
    e.addEventListener('click', (e) => {
      if(!isGameOver){
        playerChoice = e.target.name
        playerDisplay.innerText = playerChoice
        computerSelection()
        getResult()
        winOrLose()
      }
    })
})

selectScore.addEventListener('change', () => {
    winningScore = parseInt(selectScore.value)
    reset()
  })

resetBtn.addEventListener('click', () => {
    reset()
})


// Functions
const computerSelection = () => {
    let random = Math.floor( Math.random() * elements.length)
    computerChoice = elements[random].name
    computerDisplay.innerText = computerChoice
}

const getResult = () => {
  if(!isGameOver){
    if(computerChoice === playerChoice){
        result = "It's a draw!";
    }else if(computerChoice === "paper" && playerChoice === "rock"){
        result = "You Lose! Paper beats Rock";
        computerCount += 1;
    }else if(computerChoice === "rock" && playerChoice === "scissors"){
        result = "You Lose! Rock beats Scissors";
        computerCount += 1;
    }else if(computerChoice === "scissors" && playerChoice === "paper"){
        result = "You Lose! Scissors beats Paper";
        computerCount += 1;
    }else if(computerChoice === "rock" && playerChoice === "paper"){
        result = "You Win! Paper beats Rock";
        playerCount += 1;
    }else if(computerChoice === "scissors" && playerChoice === "rock"){
        result = "You Win! Rock beats Scissors";
        playerCount += 1;
    }else if(computerChoice === "paper" && playerChoice === "scissors"){
        result = "You Win! Scissors beats Paper";
        playerCount += 1;
    }
    computerScore.innerText = computerCount
    playerScore.innerText = playerCount
    textDisplay.innerHTML = result
  }
}

const reset = () => {
  isGameOver = false
  playerCount = 0
  computerCount = 0
  playerScore.innerText = 0
  computerScore.innerText = 0
  textDisplay.innerHTML = ""
  computerDisplay.innerText = ""
  playerDisplay.innerText = ""
}

const winOrLose = () => {
  if(playerCount === winningScore){
    isGameOver = true
    textDisplay.classList.add('win')
  }else if(computerCount === winningScore) {
    isGameOver = true
    textDisplay.classList.add('lose')
  }else{
    textDisplay.classList.remove('lose')
    textDisplay.classList.remove('win')
  }
}

