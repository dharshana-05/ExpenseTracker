import React from 'react';
import TransactionCard from './TransactionCard';

const TransactionList = ({ transactions, removeFromList }) => {
  return (
    <div>
      {transactions.map((txn, index) => (
        <TransactionCard 
          key={index} 
          title={txn.title} 
          amount={txn.amount}
          index={index} // Pass the index
          removeFromList={removeFromList}  // Pass removeFromList as a prop
        />
      ))}
    </div>
  );
};

export default TransactionList;
