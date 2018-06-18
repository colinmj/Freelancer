import React from 'react';
import { total } from '../helpers/total';
import { NavLink } from 'react-router-dom';

const IncomeTotal = ({ income }) => {
  return (
    <div className="total">
      <NavLink to="/addincome" activeClassName="is-active">
        Add Income
      </NavLink>
      {income.length > 0 ? (
        income.length && total(income)
      ) : (
        <p> Nothing To Display! </p>
      )}
    </div>
  );
};

export default IncomeTotal;
