import React from 'react';
import MultiSelect from '../../components/IncomeSelect';
import IncomeList from '../../components/IncomeList';
import FilterList from '../../components/FilterList';
import IncomeTotal from '../../components/IncomeTotal';

const Income = ({ income, selected, categories }) => {
  return (
    <div className="display_container">
      <IncomeTotal income={income} />
      <div className="display_filters">
        <FilterList />
        <MultiSelect categories={categories} />
      </div>

      <IncomeList income={income} selected={selected} />
    </div>
  );
};

export default Income;
