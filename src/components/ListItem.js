import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ListItem = ({ title, amount, created, description }) => {
  return (
    <div>
      <h4>{title} </h4>
      <p>{numeral(amount / 100).format('$0,0.00')} </p>
      <p>{moment(created).format('MMMM Do, YYYY')}</p>
      <p>{description}</p>
    </div>
  );
};

export default ListItem;
