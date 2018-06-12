import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import MultiSelect from '../../components/ExpenseSelect';
import FilterList from '../../components/FilterList';

const Expenses = ({ expenses, categories }) => {
  return (
    <div>
      <ExpenseList expenses={expenses} />
      <MultiSelect categories={categories} />
      <FilterList />
    </div>
  );
};

export default Expenses;
