#! /usr/bin/env node
import inquirer from "inquirer";

//1) computer will generated a random number - Done

//2) user input for guessing number - Done

//3) complair user input with computer generated number and show result - Done

const randomNumber = Math.floor(Math.random() * 6 + 1 );

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number",
    }
]);

if(answer.userGuessedNumber === randomNumber ){
    console.log("congratulation! you guessed right number.");
}
else{
   console.log("You guessed wrong number!")
}
