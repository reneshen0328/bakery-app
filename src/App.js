import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainNavbar from './components/layout/MainNavbar'

import AllBakeryItemsPage from './pages/AllBakeryItems';
import NewBakeryItemPage from './pages/NewBakeryItem';
import CakeBasesPage from './pages/CakeBases';
import TiramisuPage from './pages/Tiramisu';
import MadeleinePage from './pages/Madeleine';


function App() {
  return (
    <div>
      <Router>
      <MainNavbar />
      <Switch>
        <Route path='/' exact={true}><AllBakeryItemsPage /></Route>
        <Route path='/new-bakery-item'><NewBakeryItemPage /></Route>
        <Route path='/cake-bases'><CakeBasesPage /></Route>
        <Route path='/tiramisu'><TiramisuPage /></Route>
        <Route path='/madeleine'><MadeleinePage /></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
