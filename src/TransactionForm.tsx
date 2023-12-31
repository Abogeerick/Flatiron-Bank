import React, { useState } from 'react';
import './TransactionForm.css';

const TransactionForm = ({ addTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the addTransaction function with the formData
    addTransaction(formData);
    // Clear the form fields
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <label>
        Date:
        <input type="text" name="date" value={formData.date} onChange={handleChange} className="input-field" />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={formData.description} onChange={handleChange} className="input-field" />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={formData.category} onChange={handleChange} className="input-field" />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={formData.amount} onChange={handleChange} className="input-field" />
      </label>
      <button type="submit" className="submit-button">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
