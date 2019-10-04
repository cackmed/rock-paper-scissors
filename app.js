import { computerThrow } from './get-random-throw.js';
const playButton = document.getElementById('my-button');
const victories = document.getElementById('victories');
const defeat = document.getElementById('defeat');
const draws = document.getElementById('draws');

//Results Displayed
let victoriesWon = 0;
let defeatSuffered = 0;
let drawsObtained = 0;
victories.textContent = victoriesWon;
defeat.textContent = defeatSuffered;
draws.textContent = drawsObtained;

// Play Input
const playerDecision = () => {
    const selectedRadioButton = document.querySelector('input:checked');
    const playerThrow = selectedRadioButton.value;
    console.log(playerThrow);
};
playButton.addEventListener('click', playerDecision);
//trying at a player input and computer input comparison with return of a string 
let compareResults = () => {
    if (playerDecision === computerThrow) return 'Tie';
    else if (playerDecision === 'rock', computerThrow === 'paper') return 'Defeat';
    else if (playerDecision === 'paper', computerThrow === 'scissors') return 'Defeat';
    else if (playerDecision === 'scissors', computerThrow === 'rock') return 'Defeat';
    else if (playerDecision === 'scissors', computerThrow === 'paper') return 'Victory';
    else if (playerDecision === 'rock', computerThrow === 'scissors') return 'Victory';
    else if (playerDecision === 'paper', computerThrow === 'rock') return 'Victory';
};
console.log(compareResults);
