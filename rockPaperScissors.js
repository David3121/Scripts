// Creates a random number between one and three.
var opponent = Math.floor(Math.random() * 3);

// Your hand
myHand = 'RoCK'.toLowerCase();

// Point system for you and your opponent.
let myPoints = 0;
let opponentPoints = 0;

// Determines the ammount of points needed to win.
const bestOutOf = 3;

// Assigns the opponent with either rock, paper, or scissors.
if (opponent === 1){
  opponent = 'rock'
}else if (opponent === 2){
    opponent = 'paper'
}else{
    opponent = 'scissors'
}

// Code for rock paper scissors if you choose rock.
if (myHand === 'rock' && opponent === 'rock'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. Please try again`)
}
else if (myHand === 'rock' && opponent === 'paper'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You lost this round!`)
  myPoints += 1;
}
else if (myHand === 'rock' && opponent === 'scissors'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You won this round!`)
  opponentPoints += 1;
}
// Code for rock paper scissors if you choose paper
else if (myHand === 'paper' && opponent === 'rock'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You won this round!`)
  myPoints += 1;
}
else if (myHand === 'paper' && opponent === 'paper'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. Please try again`)
}
else if (myHand === 'paper' && opponent === 'scissors'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You lost this round!`)
  opponentPoints += 1;
}
// Code for rock paper scissors if you choose rock.
else if (myHand === 'scissors' && opponent === 'rock'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You lost this round!`)
  opponentPoints += 1;
}
else if (myHand === 'scissors' && opponent === 'paper'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. You won this round!`)
  myPoints += 1;
}
else if (myHand === 'scissors' && opponent === 'scissors'){
  console.log(`you chose ${myHand}, and your opponent chose ${opponent}. Please try again`)
}else{
  console.log('Please pick either rock, paper, or scissors.')
}


// Code for keeping track of the players points. First to the bestOutOf variable wins.
if (opponentPoints === bestOutOf){
  console.log('Defeat. Your opponent won the game')
  opponentPoints == 0;
  myPoints == 0;
}else if (myPoints === bestOutOf){
  console.log('Victory! You won the game!')
  opponentPoints = 0;
  myPoints = 0;
}

console.log(myPoints);
console.log(opponentPoints);