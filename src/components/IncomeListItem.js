import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const IncomeListItem = ({ title, amount, created, description, id }) => {
  return (
    <div>
      <Link to={`/editincome/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{numeral(amount / 100).format('$0,0.00')} </p>
      <p>{moment(created).format('MMMM Do, YYYY')}</p>
      <p>{description}</p>
    </div>
  );
};

export default IncomeListItem;
