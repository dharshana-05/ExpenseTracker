import React from "react";

const TransactionCard = ({ title, amount, removeFromList, index }) => {
  const amountStyle = {
    color: amount >= 0 ? "green" : "red",
  };

  return (
    <div className="transaction-card-container">
      <div className="transaction-card">
        <span>{title}</span>
        <span style={amountStyle}>${amount.toFixed(2)}</span>
      </div>
      <div className="delete-btn-container">
        <button className="delete-btn" onClick={() => removeFromList(index)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionCard;
