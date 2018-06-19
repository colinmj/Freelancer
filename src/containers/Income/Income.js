import React from 'react';
import MultiSelect from '../../components/IncomeSelect';
import IncomeList from '../../components/IncomeList';
import FilterList from '../../components/FilterList';
import IncomeTotal from '../../components/IncomeTotal';

const Income = ({ income, selected, categories }) => {
  return (
    <div>
      <IncomeTotal income={income} />
      <div className="content-container">
        <div className="display_filters">
          <FilterList />
          <div className="multi">
            <MultiSelect categories={categories} />
          </div>
        </div>
      </div>

      <IncomeList income={income} selected={selected} />
    </div>
  );
};

export default Income;
