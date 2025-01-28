const { Command } = require('commander');
const program = new Command();



program
    .command("calculator")
    .description("A simple calculator CLI tool")
    .version('0.0.1')


program
    .command('add <a> <b>') // Define positional arguments
    .description('Add two numbers')
    .action((a, b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Please provide valid numbers.');
        } else {
            console.log(`Result: ${num1 + num2}`);
        }
    });

program
    .command('sub <a> <b>') // Define positional arguments
    .description('Sub two numbers')
    .action((a, b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Please provide valid numbers.');
        } else {
            console.log(`Result: ${num1 - num2}`);
        }
    });

program
    .command('multiply <a> <b>') // Define positional arguments
    .description('multiply two numbers')
    .action((a, b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Please provide valid numbers.');
        } else {
            console.log(`Result: ${num1 * num2}`);
        }
    });

program
    .command('div <a> <b>') // Define positional arguments
    .description('divide two numbers')
    .action((a, b) => {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) {
            console.log('Please provide valid numbers.');
        } else {
            console.log(`Result: ${num1 / num2}`);
        }
    });

program.parse(process.argv);