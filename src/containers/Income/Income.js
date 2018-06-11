import React from 'react';
import MultiSelect from '../../components/IncomeSelect';
import IncomeList from '../../components/IncomeList';

const Income = ({ income, selected, categories }) => {
  return (
    <div>
      <IncomeList income={income} selected={selected} />
      <MultiSelect categories={categories} />
    </div>
  );
};

export default Income;
