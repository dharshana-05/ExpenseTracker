import React from 'react';

const IncExpContainer = (props) => {
  const { transactions } = props;

  let income = 0;
  let expense = 0;

  // Calculate income and expense
  transactions.forEach((txn) => {
    if (txn.amount >= 0) {
      income += txn.amount;
    } else {
      expense += txn.amount;
    }
  });

  return (
    <>
      <h3>Your Balance</h3>
      <h1>${(income + expense).toFixed(2)}</h1>
      <div className="inc-expn-container">
        <div>
          <h3>Income</h3>
          <div>${income.toFixed(2)}</div>
        </div>
        <div className="separator" />
        <div>
          <h3>Expense</h3>
          <div>-${Math.abs(expense).toFixed(2)}</div>
        </div>
      </div>
    </>
  );
};

export default IncExpContainer;
