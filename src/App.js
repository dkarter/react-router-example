import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { startCase } from 'lodash';

import './App.css';

const Links = () => {
  return (
    <nav>
      <NavLink activeClassName="active" exact to="/">Home</NavLink>
      <NavLink activeStyle={{ color: 'green' }} to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

const PageComponent = ({ match }) => {
  return (
    <h1>
      PAGE: {startCase(match.params.page) || 'Home'}<br />
      SUBPAGE: {startCase(match.params.subpage)}
    </h1>
  );
};
const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/:page?/:subpage?" component={PageComponent} />
    </div>
  </Router>
);

export default App;
