
const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const program = new Command();
const budget = 5000

const filePath = path.join(__dirname, "expenses.json")


function readData() {
    try {
        const data = fs.readFileSync(filePath, 'utf8')
        return JSON.parse(data)
    } catch (error) {
        console.error("Error reading file:", error);
        return [];
    }
}

function writeData(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    } catch (error) {
        console.error("Error writing to file:", error);
    }
}

function summaryT() {
    const expenses = readData()
    let sum = 0
    const totalSummary = expenses.forEach((expense) => sum += expense.amount)
    return sum
}

function addExpense(description, amount, category) {
    const expenses = readData()
    const id = expenses.length ? expenses[expenses.length - 1].id + 1 : 1; // Generate a new ID
    const newExpense = {
        id,
        date: new Date().toISOString().split("T")[0], // Today's date
        description,
        amount,
        category,
    };

    const total = summaryT()
    if (total > budget) {
        console.log(`You have exceeded the monthly budget!)`);
        return
    }
    expenses.push(newExpense);
    writeData(expenses);
    console.log(`Expense added successfully (ID: ${id})`);
}

function listExpenses() {

    const expenses = readData();
    if (expenses.length === 0) {
        console.log("No expenses found.");
        return;
    }
    // Print the headers
    console.log("#ID  Date       Description  Amount");


    expenses.forEach(expense => {
        console.log(
            `#${expense.id}   ${expense.date}  ${expense.description}  $${expense.amount}  ${expense.category || "N/A"}`
        );

    });

}

function deleteExpense(id) {

    const expenses = readData()
    const expenseIndex = expenses.findIndex((expense) => expense.id === id)

    if (expenseIndex === -1) {
        console.log("Expense with that ID not found!");
        return;
    }

    expenses.splice(expenseIndex, 1)

    // Reassign IDs to be sequential starting from 1
    expenses.forEach((expense, index) => {
        expense.id = index + 1

    })
    writeData(expenses)

    console.log(`Expense deleted successfully (ID: ${id})`);

}

function summary(month) {

    const expenses = readData();
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Filter expenses for the provided month
    let sum = 0;

    const filteredExpenses = expenses.filter((expenses) => {
        const expenseDate = new Date(expenses.date)
        const expenseMonth = expenseDate.getMonth() + 1;
        return expenseMonth === month;
    })

    // Sum the expenses for this month
    filteredExpenses.forEach((expense) => sum += expense.amount);

    // Display the total expenses for the month
    if (sum === 0) {
        console.log(`No expenses found for ${monthNames[month - 1]}`);
    } else {
        console.log(`Total expenses for ${monthNames[month - 1]}: $${sum}`);
    }


}


program
    .command('add')
    .description("Add a new expenses")
    .requiredOption("--description <description>", "Description of the expense")
    .requiredOption("--amount <amount>", "Amount of the expense", parseFloat)
    .option("--category <category>", "Category of the expense")
    .action((option) => {
        addExpense(option.description, option.amount, option.category)
    })

program
    .command("list")
    .description("List all expenses")
    .action(listExpenses)
program
    .command("delete")
    .description("Delete an expense")
    .requiredOption("--id <id>", "ID of the expense to delete", parseInt)
    .action((options) => {
        deleteExpense(options.id)

    })

program
    .command("summaryT")
    .description("summary of total expenses")
    .action(() => {
        const total = summaryT()
        console.log(`Total expenses: $${total}`);
    })

program
    .command("summary")
    .description("Summary of total expenses in a month")
    .option("--month <month>", "Specify the month for summary (1 to 12)", parseInt)
    .action((options) => {
        const month = options.month || (new Date()).month + 1//default to  current month
        summary(month);
    })


program.parse();



