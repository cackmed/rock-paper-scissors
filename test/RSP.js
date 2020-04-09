// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { computerThrow } from '../get-random-throw.js';
//import getRandomThrow from '../get-random-throw.js';
const test = QUnit.test;

test('GetThrow = 0 should return rock', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getThrow = 0;
    const expected = 'rock';
    //Act 
    // Call the function you're testing and set the result to a const
    const victory = computerThrow(getThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(victory, expected);
});
test('GetThrow = 1 should return paper', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getThrow = 1;
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const victory = computerThrow(getThrow);

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(victory, expected);
});
test('GetThrow = 2 should return scissors', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const getThrow = 2;
    const expected = 'scissors';
    //Act 
    // Call the function you're testing and set the result to a const
    const victory = computerThrow(getThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(victory, expected);
});
