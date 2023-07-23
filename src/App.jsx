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

  const fetchTransactions = async () => {
    try {
      const response = await fetch('http://localhost:8001/transactions');
      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const addTransaction = (newTransaction) => {
    // Update the transactions state with the newTransaction (do not persist to backend in core deliverables)
    setTransactions([...transactions, newTransaction]);
  };

  const filterTransactions = (searchTerm) => {
    // Filter transactions based on the description matching the searchTerm
    // Update the filtered transactions in the UI
    const filteredTransactions = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTransactions(filteredTransactions);
  };

  const sortTransactionsByCategory = () => {
    // Sort transactions by category
    // Update the sorted transactions in the UI
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.category.localeCompare(b.category)
    );
    setTransactions(sortedTransactions);
  };

  const sortTransactionsByDescription = () => {
    // Sort transactions by description
    // Update the sorted transactions in the UI
    const sortedTransactions = [...transactions].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
    setTransactions(sortedTransactions);
  };

  const deleteTransaction = (transactionId) => {
    // Remove the transaction with the given transactionId from transactions state
    // Optionally, update the backend using DELETE request (not required in core deliverables)
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container">
      <h1 className="header">Bank Transactions</h1>
      <TransactionForm addTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search transactions"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TransactionTable
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        sortTransactionsByCategory={sortTransactionsByCategory}
        sortTransactionsByDescription={sortTransactionsByDescription}
      />
    </div>
  );
};

export default App;
