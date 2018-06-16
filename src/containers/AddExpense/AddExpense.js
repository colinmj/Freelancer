import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';

const AddExpense = ({ expenseSubmit }) => {
  return (
    <div className="add_container">
      <h1>Add Expense</h1>
      <ExpenseForm expenseSubmit={expenseSubmit} />
    </div>
  );
};

export default AddExpense;
