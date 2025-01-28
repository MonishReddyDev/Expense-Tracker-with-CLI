# Expense Tracker

A command-line application to help you track your expenses. This application allows you to add, delete, view, and summarize your expenses. You can also filter expenses by category and month, and get a detailed summary of your expenses.

## Features

- **Add Expenses**: Add a new expense with a description, amount, and category.
- **Delete Expenses**: Delete an expense by its ID.
- **View All Expenses**: View all the expenses in a tabular format.
- **Summary**: Get a summary of your total expenses.
- **Monthly Summary**: View the total expenses for a specific month.
- **Reassign IDs**: After deleting an expense, IDs are automatically reassigned to maintain continuity.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/monishreddy/expense-tracker.git

2. Install dependencies:
   ```bash
   cd expense-tracker
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev -- <command> <options>
   ```

## Commands

### `add`

Adds a new expense to the tracker.

```bash
npm run dev -- add --description "Lunch" --amount 20 --category "Food"
```

- **description**: Description of the expense (e.g., "Lunch").
- **amount**: Amount of the expense.
- **category**: (Optional) Category of the expense (e.g., "Food").

### `delete`

Deletes an expense by its ID.

```bash
npm run dev -- delete --id <id>
```

- **id**: The ID of the expense you want to delete.

### `list`

Displays all the expenses in a tabular format.

```bash
npm run dev -- list
```

Output:

```
ID  Date       Description  Amount
1   2024-08-06  Lunch        $20
2   2024-08-06  Dinner       $10
```

### `summary`

Displays the total amount of all expenses.

```bash
npm run dev -- summary
```

Output:

```
Total expenses: $30
```

### `summary --month <month>`

Displays the total expenses for a specific month.

```bash
npm run dev -- summary --month 8
```

Output:

```
Total expenses for August: $20
```

## File Storage

- All expenses are stored in the `expenses.json` file.
- The file is automatically updated with each command that modifies the list of expenses.

## Contributing

1. Fork the repository.
2. Create your branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).
```

You can copy and paste this format into your `README.md` file. Just update the `git clone` URL with your own repository URL.
