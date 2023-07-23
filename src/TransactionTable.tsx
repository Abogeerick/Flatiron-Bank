import React from 'react';
import './TransactionTable.css';

const TransactionTable = ({ transactions, deleteTransaction, sortTransactionsByCategory, sortTransactionsByDescription }) => {
  return (
    <div className="transaction-table">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              <td>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sort-buttons">
        <button onClick={sortTransactionsByCategory} className="sort-button">Sort by Category</button>
        <button onClick={sortTransactionsByDescription} className="sort-button">Sort by Description</button>
      </div>
    </div>
  );
};

export default TransactionTable;
