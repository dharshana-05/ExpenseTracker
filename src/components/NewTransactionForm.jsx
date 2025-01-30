import React, { useState } from "react";

const NewTransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      title,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setTitle(""); 
    setAmount(""); 
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default NewTransactionForm;
