import getRandomThrow from './get-random-throw.js';
import compareResults from './compare-results.js';
const playButton = document.getElementById('my-button');
const victories = document.getElementById('victories');
const defeat = document.getElementById('defeat');
const draws = document.getElementById('draws');
const matchResult = document.getElementById('match-result');

//Results Displayed
let victoriesWon = 0;
let defeatSuffered = 0;
let drawsObtained = 0;
victories.textContent = victoriesWon;
defeat.textContent = defeatSuffered;
draws.textContent = drawsObtained;

const updateSpans = () => {
    victories.textContent = victoriesWon;
    defeat.textContent = defeatSuffered;
    draws.textContent = drawsObtained;
};


// Play Input
const playerDecision = () => {
    let computerChoice = Math.round(Math.random() * 2);
    const computerThrow = getRandomThrow(computerChoice);
    const selectedRadioButton = document.querySelector('input:checked');
    const playerThrow = selectedRadioButton.value;
    const answer = compareResults(playerThrow, computerThrow);
    return answer;
};
playButton.addEventListener('click', () => {
    const result = playerDecision();
    console.log(result);
    if (result === 'Victory') {
        victoriesWon++;
        matchResult.textContent = ('Victory is Yours!');
    }        
    else if (result === 'Defeat') { 
        defeatSuffered++;
        matchResult.textContent = ('Defeat is upon you!');
    }
    else if (result === 'Tie') {
        drawsObtained++;
        matchResult.textContent = ('A draw is your fate');
    }
    updateSpans();
});
//trying at a player input and computer input comparison with return of a string 

