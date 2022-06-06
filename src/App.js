import React from 'react';
import { Route , Switch } from 'react-router-dom';

import AllBakeryItemsPage from './pages/AllBakeryItems';
import NewBakeryItemPage from './pages/NewBakeryItem';
import CakeBasesPage from './pages/CakeBases';
import MainNavbar from './components/layout/MainNavbar'

function App() {
  return (
    <div>
      <MainNavbar />
      <Switch>
        <Route path='/' exact={true}>
          <AllBakeryItemsPage />
        </Route>
        <Route path='/new-bakery-item'>
          <NewBakeryItemPage />
        </Route>
        <Route path='/cake-bases'>
          <CakeBasesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
