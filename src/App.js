import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

const Links = () => {
  return (
    <nav>
      <NavLink to="/?id=123">Inline</NavLink>
      <NavLink to={{ pathname: '/', search: 'id=456' }}>Object</NavLink>
    </nav>
  );
};
const PageComponent = ({ match, location }) => {
  return (
    <div>
      <p>root</p>
      <p>{JSON.stringify(match)}</p>
      <p>{JSON.stringify(location)}</p>
      <p>{new URLSearchParams(location.search).get('id')}</p>
    </div>
  );
};

const App = () => (
  <Router>
    <div>
      <Links />
      <Route path="/" component={PageComponent} />
    </div>
  </Router>
);

// test with 03-14-2017

export default App;
