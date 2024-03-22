#! /usr/bin/env node
import inquirer from 'inquirer';
async function calculator() {
    console.log('Typescript Calculator');
    const answer = await inquirer.prompt([
        { message: 'Enter First Number', type: 'number', name: 'firstnumber' },
        { message: 'Enter Second Number', type: 'number', name: 'secondnumber' },
        {
            message: 'Select an Operator',
            type: 'list',
            name: 'operator',
            choices: ['Addition " + "', 'Subtraction " - "', 'Multiplication " x "', 'Division " ÷ "'],
        },
    ]);
    const { firstnumber, secondnumber, operator } = answer;
    let result;
    switch (operator) {
        case 'Addition " + "':
            result = firstnumber + secondnumber;
            break;
        case 'Subtraction " - "':
            result = firstnumber - secondnumber;
            break;
        case 'Multiplication " x "':
            result = firstnumber * secondnumber;
            break;
        case 'Division " ÷ "':
            if (secondnumber == 0) {
                console.log("Can't be Divided by zero");
                return;
            }
            result = firstnumber / secondnumber;
            break;
        default:
            console.log('Invalid operation');
            return;
    }
    console.log(`Result is: ${result}`);
}
calculator();
