'use strict';

const maxNumber = 20;
let randomNumber = generateRandomNumber();
let highScore = 0;
let score = maxNumber;

const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const numberElement = document.querySelector('.number');
const guessElement = document.querySelector('.guess');
const bodyElement = document.querySelector('body');

function updateHighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
}
function generateRandomNumber() {
  return Math.trunc(Math.random() * maxNumber) + 1;
}

function displayMessage(message) {
  messageElement.textContent = message;
}

function displayScore(score) {
  scoreElement.textContent = score;
}

function displayNumber(number) {
  numberElement.textContent = number;
}

function setNumberWidth(width) {
  numberElement.style.width = width;
}

function setBackgroundColor(color) {
  bodyElement.style.backgroundColor = color;
}

function resetGame() {
  score = maxNumber;
  document.querySelector('.highscore').textContent = highScore;
  randomNumber = generateRandomNumber();
  displayNumber('?');
  displayMessage('Start guessing...');
  displayScore(maxNumber);
  setNumberWidth('15rem');
  guessElement.value = '';
  setBackgroundColor('#222');
}

function checkGuess() {
  const guess = Number(guessElement.value);

  if (!guess) {
    displayMessage('Input number!');
    return;
  }

  if (randomNumber === guess) {
    updateHighScore();
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
    displayNumber(randomNumber);
    displayMessage('Correct number');
  } else if (randomNumber < guess) {
    displayMessage('The guess is too high');
    score--;
    displayScore(score);
  } else {
    displayMessage('The guess is too low');
    score--;
    displayScore(score);
  }

  if (score < 1) {
    displayMessage('You lost the game');
  }
}

document.querySelector('.again').addEventListener('click', resetGame);
document.querySelector('.check').addEventListener('click', checkGuess);
