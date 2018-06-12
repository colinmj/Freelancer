import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import MultiSelect from '../../components/ExpenseSelect';
import FilterList from '../../components/FilterList';
import ExpenseTotal from '../../components/ExpenseTotal';

const Expenses = ({ expenses, categories }) => {
  return (
    <div>
      <ExpenseTotal expenses={expenses} />
      <ExpenseList expenses={expenses} />
      <MultiSelect categories={categories} />
      <FilterList />
    </div>
  );
};

export default Expenses;
