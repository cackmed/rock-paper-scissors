import getRandomThrow from './get-random-throw.js';
import compareResults from './compare-results.js';
const playButton = document.getElementById('my-button');
const victories = document.getElementById('victories');
const defeat = document.getElementById('defeat');
const draws = document.getElementById('draws');

//Results Displayed
let victoriesWon = 0;
let defeatSuffered = 0;
let drawsObtained = 0;

// Play Input
const playerDecision = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    const computerThrow = getRandomThrow(computerChoice);
    const selectedRadioButton = document.querySelector('input:checked');
    const playerThrow = selectedRadioButton.value;
    const answer = compareResults(playerThrow, computerThrow);
    return answer;
};
playButton.addEventListener('click', () => {
    const result = playerDecision();
    console.log(result);
    victories.textContent = victoriesWon;
    defeat.textContent = defeatSuffered;
    draws.textContent = drawsObtained;
    if (result === 'Victory') {
        victoriesWon++;
    }        
    else if (result === 'Defeat') {
        defeatSuffered++;
    }
    else if (result === 'Tie') {
        drawsObtained++;
    }
});
//trying at a player input and computer input comparison with return of a string 

