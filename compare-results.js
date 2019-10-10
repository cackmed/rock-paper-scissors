const compareResults = (playerThrow, computerThrow) => {
    if (playerThrow === computerThrow){ return 'Tie';
    }
    if (playerThrow === 'rock' && computerThrow === 'paper') {return 'Defeat'; 
    }
    if (playerThrow === 'paper' && computerThrow === 'scissors') { return 'Defeat';
    }
    if (playerThrow === 'scissors' && computerThrow === 'rock') { return 'Defeat';
    }
    if (playerThrow === 'scissors' && computerThrow === 'paper') { return 'Victory';
    }
    if (playerThrow === 'rock' && computerThrow === 'scissors') { return 'Victory';
    }
    if (playerThrow === 'paper' && computerThrow === 'rock') { return 'Victory'; }
};
export default compareResults;