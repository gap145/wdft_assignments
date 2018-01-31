// index.js
const readlineSync = require('readline-sync');

const name = // replace this comment with code to get the user's name
console.log('User name is', name);

const readlineSync = require('readline-sync');

//const name = readlineSync.question('May I have your name? ');
//console.log('Welcome ' + name + '!');

let number = readlineSync.question('Please enter a number: ');
//console.log('Great. Let's play!');

const max = Number(number);
let ran;// = Math.random(max) * max;
let goal;// = Math.floor(ran);
let guess;// = readlineSync.question('Guess a number between 0 and ' + max + ': ');

let generateRandomNumber = () => {
  // generate a random integer between 0 and max
  ran = Math.random(max) * max;
  return ran;
}


let getMaxFromUser = () => {
  // gets the maximum number for the game from the user and returns it as a Number
  goal = Math.floor(ran);
  return goal;
}


let getGuessFromUser = () => {
  // takes care of prompting the user for a guess and converting it to a number
  guess = readlineSync.question('Guess a number between 0 and ' + max + ': ');
  //return guess;
  return Math.floor(guess);
}

let isGuessCorrect = (/*goal, guess*/) => {
  // check if a guess is correct and return a boolean
  if (guess===goal) {
    return true;
  }
  else {
    return false;
  }
}


let startGame = () => {
 let newgenerateRandomNumber = generateRandomNumber();
 var newgetMaxFromUser = getMaxFromUser();
 var newgetGuessFromUser = getGuessFromUser();
 var newisGuessCorrect = isGuessCorrect();
  while (false) {
    if (guess < max) {
      console.log('Too Low!');
    }
    if (guess > max) {
      console.log('Too High!');
    }

    else {
      console.log("Correct! The number was " + guess);
    }
    console.log("Thanks for playing!")
    break;
  }
}
console.log(startGame());
 /*
let number = readlineSync.question('Please enter a number: ');
console.log('Hi', name, 'you have chosen the number', number);
let sum = 5 + Number(number);
console.log(number + ' plus ' + 5 + ' is ' + sum);
*/