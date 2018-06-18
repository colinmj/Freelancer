import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import MultiSelect from '../../components/ExpenseSelect';
import FilterList from '../../components/FilterList';
import ExpenseTotal from '../../components/ExpenseTotal';

const Expenses = ({ expenses, categories }) => {
  return (
    <div className="display_container">
      <ExpenseTotal expenses={expenses} />
      <div className="display_filters">
        <FilterList />
        <MultiSelect categories={categories} />
      </div>

      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Expenses;
