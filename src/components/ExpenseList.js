import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="list_container">
      <div className="label_container">
        <p>Expense</p>
        <p>Amount</p>
      </div>
      {expenses &&
        expenses.length > 0 &&
        expenses.map(item => {
          return <ExpenseListItem {...item} />;
        })}
    </div>
  );
};

export default ExpenseList;
