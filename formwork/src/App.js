/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

import expenseData from './expenseData';

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

  return (
    <>
  
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses}></ExpenseForm>
        <ExpenseTable expenses={expenses}></ExpenseTable>
        <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
        </div>
      </div>
    </main>
  
     
    </>
  );
}

export default App;
