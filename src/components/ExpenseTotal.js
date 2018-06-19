import React from 'react';
import { total } from '../helpers/total';
import { NavLink } from 'react-router-dom';

const ExpenseTotal = ({ expenses }) => {
  return (
    <div className="content-container">
      <div className="total">
        <NavLink to="/addexpense" activeClassName="is-active">
          Add Expense
        </NavLink>
        {expenses.length > 0 ? (
          expenses.length && total(expenses)
        ) : (
          <p> Nothing To Display! </p>
        )}
      </div>
    </div>
  );
};

export default ExpenseTotal;
