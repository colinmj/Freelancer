import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/modules/auth';

const Header = ({ startLogout }) => (
  <header>
    <h1>Freelancer</h1>
    <NavLink to="/dashboard" activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/addincome" activeClassName="is-active">
      Add Income
    </NavLink>

    <NavLink to="/addexpense" activeClassName="is-active">
      Add Expense
    </NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchtToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchtToProps)(Header);
