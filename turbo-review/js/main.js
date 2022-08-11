// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favDrink = 'Water';
console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let multipleWords = 'I went for a walk';
console.log(multipleWords.includes('apple') !== 0 ? true : false)
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function returnsRockPaperScissors(){
    let randomNum = Math.random();
    if (randomNum <= 0.33){
        return 'Rock';
    } else if (randomNum > 0.33 && randomNum <= 0.66){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
console.log(returnsRockPaperScissors());
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function takesInChoice(choice){
    let botsChoice = returnsRockPaperScissors().toLowerCase();
    let userChoice = choice.toLowerCase();
    if (
        (userChoice === 'rock' && botsChoice === 'paper') ||
        (userChoice === 'paper' && botsChoice === 'scissors') ||
        (userChoice === 'scissors' && botsChoice === 'rock')
        ){
        return 'You lost'
    } else if (
        (userChoice === 'paper' && botsChoice === 'rock') ||
        (userChoice === 'rock' && botsChoice === 'scissors') ||
        (userChoice === 'scissors' && botsChoice === 'paper')
        ){
        return 'You won';
    } else {
        return "It's a tie";
    }
}
console.log(takesInChoice(returnsRockPaperScissors()));
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function takesInArrOfChoices(anArr){
    console.log('Beginning game...')
    for (let i = 0; i < anArr.length; i++){
        console.log(takesInChoice(returnsRockPaperScissors()));
    }
}
console.log(takesInArrOfChoices(['eating', 'sleeping', 'watching tv']));