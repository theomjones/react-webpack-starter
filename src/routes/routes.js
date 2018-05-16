import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../layout/Layout';

// Pages
import Index from '../pages/Index';
import About from '../pages/About';

/**
 * Add routes and pages in here.
 * Don't add components here. Use /layout for global components.
 */
const Router = props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
