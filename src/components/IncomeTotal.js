import React from 'react';
import { total } from '../helpers/total';

const IncomeTotal = ({ income }) => {
  {
    income.length && console.log(total(income));
  }
  return (
    <div>
      {income.length > 0 ? (
        income.length && total(income)
      ) : (
        <p> Nothing To Display! </p>
      )}
    </div>
  );
};

export default IncomeTotal;
