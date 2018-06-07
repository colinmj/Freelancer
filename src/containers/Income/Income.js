import React from 'react';
import MultiSelect from '../../components/MultiSelect';
import IncomeList from '../../components/IncomeList';

const Income = ({ income, categories }) => {
  return (
    <div>
      <IncomeList />
      <MultiSelect categories={categories} />
    </div>
  );
};

export default Income;
