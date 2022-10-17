import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { withAuth0 } from '@auth0/auth0-react';

import Layout from './components/layout/Layout.js';
import ProtectedRoute from './auth0/ProtectedRoute.js';

import AllBakeryItemsPage from './pages/AllBakeryItems.js';
import BirthdayCakesPage from './pages/BirthdayCakesPage.js';
import HomePage from './pages/Home.js'
import MoussesPage from './pages/MoussesPage.js';
import NewBakeryItemPage from './pages/NewBakeryItem.js';
import SpongeCakesPage from './pages/SpongeCakesPage.js';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/all-bakery-items' exact component={AllBakeryItemsPage} />
          <Route path='/all-bakery-items/birthday-cakes' component={BirthdayCakesPage} />
          <Route path='/all-bakery-items/mousses' component={MoussesPage} />
          <Route path='/all-bakery-items/sponge-cakes' component={SpongeCakesPage} />
          <ProtectedRoute path='/new-bakery-item' component={NewBakeryItemPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default withAuth0(App);
