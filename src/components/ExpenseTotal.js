import React from 'react';
import { total } from '../helpers/total';

const ExpenseTotal = ({ expenses }) => {
  return (
    <div>
      {expenses.length > 0 ? (
        expenses.length && total(expenses)
      ) : (
        <p> No Dice! </p>
      )}
    </div>
  );
};

export default ExpenseTotal;
