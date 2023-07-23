import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch transactions from the local JSON DB server and update the state
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error('Error fetching transactions:', error));
  };

  const addTransaction = (newTransaction) => {
    // Update the transactions state with the newTransaction (do not persist to backend in core deliverables)
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (transactionId) => {
    // Remove the transaction with the given transactionId from transactions state
    
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== transactionId);
    setTransactions(updatedTransactions);
  };

  const sortTransactionsByCategory = () => {
    // Sort transactions by category
    // Update the sorted transactions in the UI
    const sortedTransactions = [...transactions].sort((a, b) => a.category.localeCompare(b.category));
    setTransactions(sortedTransactions);
  };

  const sortTransactionsByDescription = () => {
    // Sort transactions by description
    // Update the sorted transactions in the UI
    const sortedTransactions = [...transactions].sort((a, b) => a.description.localeCompare(b.description));
    setTransactions(sortedTransactions);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Reset the filtered transactions when the search term is empty
    if (e.target.value === '') {
      fetchTransactions();
    }
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="header">Bank Transactions</h1>
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <TransactionTable
        transactions={filteredTransactions} // Display the filtered transactions in the table
        deleteTransaction={deleteTransaction}
        sortTransactionsByCategory={sortTransactionsByCategory}
        sortTransactionsByDescription={sortTransactionsByDescription}
      />
      <div className="form-container">
        <TransactionForm addTransaction={addTransaction} />
      </div>
    </div>
  );
};

export default App;
