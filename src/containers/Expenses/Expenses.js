import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import MultiSelect from '../../components/ExpenseSelect';

const Expenses = ({ expenses, categories }) => {
  return (
    <div>
      <ExpenseList expenses={expenses} />
      <MultiSelect categories={categories} />
    </div>
  );
};

export default Expenses;
