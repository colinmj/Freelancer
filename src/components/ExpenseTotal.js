import React from 'react';
import { total } from '../helpers/total';

const ExpenseTotal = ({ expenses }) => {
  return (
    <div className="total">
      {expenses.length > 0 ? (
        expenses.length && total(expenses)
      ) : (
        <p> Nothing To Display! </p>
      )}
    </div>
  );
};

export default ExpenseTotal;
