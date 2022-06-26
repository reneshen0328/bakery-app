import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Layout from './components/layout/Layout.js';
import MainNavbar from './components/layout/MainNavbar.js'

import AllBakeryItemsPage from './pages/AllBakeryItems.js';
import NewBakeryItemPage from './pages/NewBakeryItem.js';
import CakesPage from './pages/Cakes.js';
import TiramisuPage from './pages/Tiramisu.js';
import MadeleinePage from './pages/Madeleine.js';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact={true}><AllBakeryItemsPage /></Route>
          <Route path='/new-bakery-item'><NewBakeryItemPage /></Route>
          <Route path='/cakes' exact={true}><CakesPage /></Route>
          <Route path='/tiramisu'><TiramisuPage /></Route>
          <Route path='/madeleine'><MadeleinePage /></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
