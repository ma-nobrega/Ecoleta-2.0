import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';
import Points from './pages/Points';
import Details from './pages/Details';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
      <Route component={Details} path="/details/:id" />
      <Route component={Points} path="/points" />
    </BrowserRouter>
  );
}

export default Routes;