import React from 'react';

import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/Dashboard';
import NotFoundPage from '../components/NotFound';
import Login from '../components/Login';
import Expenses from '../containers/Expenses';
import Income from '../containers/Income';
import AddIncome from '../containers/AddIncome';
import AddExpense from '../containers/AddExpense';
import EditIncome from '../components/EditIncome';
import EditExpense from '../components/EditExpense';
import About from '../components/About';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={Login} exact={true} />

        <PrivateRoute
          path="/dashboard"
          component={DashboardPage}
          exact={true}
        />
        <PrivateRoute path="/expenses" component={Expenses} exact={true} />
        <PrivateRoute path="/income" component={Income} exact={true} />
        <PrivateRoute path="/addincome" component={AddIncome} exact={true} />
        <PrivateRoute path="/addexpense" component={AddExpense} exact={true} />
        <PrivateRoute
          path="/editincome/:id"
          component={EditIncome}
          exact={true}
        />
        <PrivateRoute path="/about" component={About} exact={true} />
        <PrivateRoute
          path="/editexpense/:id"
          component={EditExpense}
          exact={true}
        />
        {/* <PrivateRoute path="/categories" component={Categories} exact={true} /> */}

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
