import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';

const ToursPage = () =>(
  <div>
    <h1>
      Tours leave everyday at 8am. 
    </h1>
  </div>
)

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/tours' component={ToursPage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

export default App;
