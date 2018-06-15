import React from 'react';
import IncomeForm from '../../components/IncomeForm';

const AddIncome = ({ incomeSubmit }) => {
  return (
    <div className="add_income_container">
      <h1>Add Income </h1>
      <IncomeForm incomeSubmit={incomeSubmit} />
    </div>
  );
};

export default AddIncome;
