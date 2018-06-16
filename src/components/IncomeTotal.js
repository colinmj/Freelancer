import React from 'react';
import { total } from '../helpers/total';

const IncomeTotal = ({ income }) => {
  return (
    <div className="total">
      {income.length > 0 ? (
        income.length && total(income)
      ) : (
        <p> Nothing To Display! </p>
      )}
    </div>
  );
};

export default IncomeTotal;
