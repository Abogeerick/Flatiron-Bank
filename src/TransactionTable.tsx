import React from 'react';

const TransactionTable = ({ transactions, deleteTransaction, sortTransactionsByCategory, sortTransactionsByDescription }) => {
  return (
    <div>
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
                <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={sortTransactionsByCategory}>Sort by Category</button>
        <button onClick={sortTransactionsByDescription}>Sort by Description</button>
      </div>
    </div>
  );
};

export default TransactionTable;
