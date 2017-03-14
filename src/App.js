import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { startCase } from 'lodash';

import './App.css';

const PageComponent = ({ match }) => {
  return (
    <h1>
      Param A: {match.params.a}<br />
      Param B: {match.params.b}
    </h1>
  );
};

const App = () => (
  <Router>
    <div>
      <Route exact path="/:a(\d{2}-\d{2}-\d{4})/:b(\.[a-z]+)" component={PageComponent} />
    </div>
  </Router>
);

// test with 03-14-2017

export default App;
