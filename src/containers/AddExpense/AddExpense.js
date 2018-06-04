import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';

const AddExpense = ({ expenseSubmit }) => {
  return <ExpenseForm expenseSubmit={expenseSubmit} />;
};

export default AddExpense;
