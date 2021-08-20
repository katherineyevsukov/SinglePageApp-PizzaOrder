import React from "react";
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css'
import Home from './Home'
import OrderForm from './OrderForm'

const App = () => {
  return (
    <div className="app">
    <header>
      <h1>Lambda Eats</h1>
      <NavLink to ="/">Home</NavLink>
    </header>

    <Switch>
      <Route path='/pizza'>
        <OrderForm />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </div>
  );
};
export default App;
