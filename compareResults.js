const compareResults = (playerDecision, computerThrow) => {
    if (playerDecision === computerThrow){ return 'Tie';
    }
    if (playerDecision === 'rock' && computerThrow === 'paper') {return 'Defeat'; 
    }
    if (playerDecision === 'paper' && computerThrow === 'scissors') { return 'Defeat';
    }
    if (playerDecision === 'scissors' && computerThrow === 'rock') { return 'Defeat';
    }
    if (playerDecision === 'scissors' && computerThrow === 'paper') { return 'Victory';
    }
    if (playerDecision === 'rock' && computerThrow === 'scissors') { return 'Victory';
    }
    if (playerDecision === 'paper' && computerThrow === 'rock') { return 'Victory'; }
};
export default compareResults;