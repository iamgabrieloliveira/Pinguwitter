import React from 'react';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Profile from './pages/Profile';
import Home from './pages/Home';

export const RouteManager = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
