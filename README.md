# Bank Transactions React App

![Bank Transactions](link_to_screenshot)

A simple React application that displays a list of your recent bank transactions and allows you to add new transactions. You can also filter transactions by their description and sort them alphabetically by category or description. This project was built to practice React development skills and demonstrate how to interact with a local JSON DB server to fetch and manipulate data.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Author](#author)

## Requirements

To run this project, you need the following:

- Git installed on your machine to clone the repository.
- Code editor (e.g., VS Code) for viewing and editing the code.
- Node.js installed to install and manage dependencies.
- JSON Server installed globally for simulating a server.

## Installation

1. Clone this repository by running the following command in your terminal:
   ```bash
   $ git clone https://github.com/your_username/bank-transactions-react-app.git
2. Navigate to the cloned repository folder:
```bash
    $ cd bank-transactions-react-app
```
3. Install project dependencies by running:
```bash
    $ npm install
```

## Usage

1. Ensure the JSON Server is running by executing the following command in your terminal:
```bash
     $ json-server --watch db.json
```
2. Start the React development server by running:
```bash
     $ npm run dev
```

## Features
As a user, you can:
1. See a table of all transactions.
2. Fill out and submit the form to add a new transaction (Note: The new transaction is not persisted to the backend in core deliverables).
3. Filter transactions by typing into the search bar. Only transactions with a description matching the search term will be shown in the transactions table.
4. Sort transactions alphabetically by category or description.
5. Delete a transaction, which will remove it from the table.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author
This project was created by Erick Aboge. Feel free to reach out if you have any questions or feedback regarding this project.

