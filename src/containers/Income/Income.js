import React from 'react';
import MultiSelect from '../../components/MultiSelect';
import IncomeList from '../../components/IncomeList';

const Income = ({ select, categories }) => {
  return (
    <div>
      <IncomeList />
      <MultiSelect select={select} categories={categories} />
    </div>
  );
};

export default Income;
