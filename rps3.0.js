

const randomNum = () => {
    random = Math.floor(Math.random() * 3)
    return random;
};

const computerHand = () => {
    if (randomNum() === 0) {
        return 'rock';
    } else if (randomNum() === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const game = (humanHand) => {
    if (humanHand === computerHand) {
        return 'Tie!' }
    else if (humanHand.toLowerCase() === 'rock') {
        if (computerHand === 'paper') {
            return 'Victory!'; }
        }
    else if (humanHand.toLowerCase() === 'paper') {
        if (computerHand === 'rock') {
            return 'Victory!'; }
    }
    else if (humanHand.toLowerCase() === 'scissors') {
        if (computerHand === 'paper') {
            return 'Victory!'; }
    }
    else {
        return 'Defeat!'; }
};

console.log(game('Rock'));