import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h1> List of Expenses </h1>

      {expenses &&
        expenses.length > 0 &&
        expenses.map(item => {
          return <ListItem {...item} />;
        })}
    </div>
  );
};

export default ExpenseList;
