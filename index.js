#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant answer and assign it to the result of inquirer.propmpt function.
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count words: "
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to console
console.log(words);
// print the word count of sentence to console
console.log(`Your sentence word count is ${words.length}`);
