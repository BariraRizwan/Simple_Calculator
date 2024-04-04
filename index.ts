#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "firstNumber",
    type: "number",
    message: "please enter first number",
  },
  {
    name: "secondNumber",
    type: "number",
    message: "please enter second number",
  },
  {
    name: "operation",
    type: "list",
    choices: ["+", "-", "*", "/"],
    message: "Please select the operator",
  },
]);

if (answer.operation == "+") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operation == "-") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operation == "*") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operation == "/") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("Invalid Operation");
}
