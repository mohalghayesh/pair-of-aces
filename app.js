// Cached Elements
const title = document.querySelector('#title')
const howToPlay = document.querySelector('#how-to-play')
const cardContainer = document.querySelector('#card-container')
const card = document.querySelector('#card')
const resultBar = document.querySelector('#result-bar')
const boxResult = document.querySelector('#box-result')
const result = document.querySelector('#result')
const startBtn = document.querySelector('#play-btn')
const playAgainBtn = document.querySelector('#play-again-btn')

// Variables
let isWinner = null
// You need an array with the pairs of cards
const cards = ['']
// For timer you can use setInterval (check MDN)
let pairsFound = 0
let isClickable = false
// You use this variable to ensure that the second card clicked turns the variable to false, so you can't click on any other cards and flip them


// Functions
const allCardsFlip = () => {
    return
}

const cardFlip = () => {
    // If isClickable = true, you can flip the card
    // Otherwise, you can't
    return
}

const render = () => {
    return
}

const handleClick = () => {
    // inside here you will make it so that the second card clicked in any pair, initates a matching function
    return
}

const match = () => {
    return
}

const isGameOver = () => {
    return
}

const init = () => {
    console.log('game is running')
    isWinner = null;
    pairsFound = 0;
    isClickable = false;
    // Reset game state to initial
    // TWO PHASES:
    // Memorization phase
    // Memorization Timer starts 10s
    // Render the time, pairsFound (all variables) -> render()
    // Cards flip over -> allCardsFlip()
    // Timer runs out
    // Cards flip over again to the other side -> allCardsFlip()
    // Matching phase
    // Matching Timer starts 60s -> while the timer is running, you need a isGameOver function to check
    // Set isClickable to true once the timer starts
    // Render the time (or any other relevant variables) -> render()
    // Enable clicking on cards -> addEventListener
    // In the event listener, you need a handleClick function
}

// Event Listener
startBtn.addEventListener('click', init)
playAgainBtn.addEventListener('click', init)