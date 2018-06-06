import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

const IncomeList = props => {
  return (
    <div>
      <h1> List of Income </h1>
      {console.log(props.income)}
      {props.income.length > 0 &&
        props.income.map(item => {
          return <ListItem {...item} />;
        })}
    </div>
  );
};

const mapStateToProps = state => ({
  income: state.income
});

export default connect(mapStateToProps)(IncomeList);
