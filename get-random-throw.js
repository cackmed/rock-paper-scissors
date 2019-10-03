export const computerThrow = (getThrow) => {
    if (getThrow === 0) return 'rock';
    else if (getThrow === 1) return 'paper'; 
    if (getThrow === 2) return 'scissors';

};

const getRandomNumber = () => {
    const getThrow = Math.round(Math.random() * 2);
    return computerThrow(getThrow);
};
console.log(getRandomNumber()); 


// console.log(computerThrow());

export default getRandomNumber;

