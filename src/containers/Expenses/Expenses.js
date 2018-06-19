import React from 'react';
import ExpenseList from '../../components/ExpenseList';
import MultiSelect from '../../components/ExpenseSelect';
import FilterList from '../../components/FilterList';
import ExpenseTotal from '../../components/ExpenseTotal';

const Expenses = ({ expenses, categories }) => {
  return (
    <div>
      <ExpenseTotal expenses={expenses} />
      <div className="content-container">
        <div className="display_filters">
          <FilterList />
          <div className="multi">
            <MultiSelect categories={categories} />
          </div>
        </div>
      </div>

      <div className="content-container">
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
};

export default Expenses;
