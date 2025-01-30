import React, { useState, useEffect } from "react";
import "./index.css";
import TransactionList from "./components/TransactionList";
import NewTransactionForm from "./components/NewTransactionForm";
import IncExpContainer from "./components/IncExpContainer";
import axios from "axios";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  // Fetch transactions from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backend-c7wl.onrender.com/api/expenses");
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchData();
  }, []);

  // Add a new transaction
  const addToList = async (title, amount) => {
    try {
      const response = await axios.post("https://backend-c7wl.onrender.com/api/expenses", {
        title,
        amount,
      });

      // Use the API's response to update the state
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        response.data,
      ]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  // Remove a transaction from the list
  const removeFromList = (index) => {
    console.log(index);
    const newTransactions = transactions.filter((txn, i) => i !== index);
    setTransactions(newTransactions);
  };

  return (
    <div className="container">
      <h1>EXPENSE TRACKER</h1>
      <IncExpContainer transactions={transactions} />
      <TransactionList transactions={transactions} removeFromList={removeFromList} />
      <NewTransactionForm addTransaction={addToList} />
    </div>
  );
};

export default App;

