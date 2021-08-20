import React, { useState } from "react";
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home'
import OrderForm from './components/OrderForm'
import ConfirmationPage from './components/ConfirmationPage'
import ErrorPage from './components/ErrorPage'

const App = () => {

  const [order, setOrder] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div className="app">
    <header>
      <h1>Lambda Eats</h1>
      <div className='nav-container'>
      <NavLink className='nav-bar' to ="/">Home</NavLink>
      <NavLink className='nav-bar' to="/pizza">Order</NavLink>
      </div>
    </header>

    <Switch>
     <Route path='/pizza/error'>
       <ErrorPage />
      </Route> 
    <Route path='/pizza/confirmation'>
       <ConfirmationPage order={order} loading={loading}/>
      </Route>
      <Route path='/pizza'>
        <OrderForm order={order} setOrder={setOrder} setLoading={setLoading} loading={loading} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
