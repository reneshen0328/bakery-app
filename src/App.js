import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/layout/Layout.js';

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
          <Route path='/' exact={true}><HomePage /></Route>
          <Route path='/all-bakery-items' exact={true}><AllBakeryItemsPage /></Route>
          <Route path='/new-bakery-item'><NewBakeryItemPage /></Route>
          <Route path='/all-bakery-items/birthday-cakes'><BirthdayCakesPage /></Route>
          <Route path='/all-bakery-items/mousses'><MoussesPage /></Route>
          <Route path='/all-bakery-items/sponge-cakes'><SpongeCakesPage /></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
