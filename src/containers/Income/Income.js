import React from 'react';
import MultiSelect from '../../components/IncomeSelect';
import IncomeList from '../../components/IncomeList';
import FilterList from '../../components/FilterList';
import IncomeTotal from '../../components/IncomeTotal';

const Income = ({ income, selected, categories }) => {
  return (
    <div>
      <IncomeTotal income={income} />
      <IncomeList income={income} selected={selected} />
      <MultiSelect categories={categories} />
      <FilterList />
    </div>
  );
};

export default Income;
