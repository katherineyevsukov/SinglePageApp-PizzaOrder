import React from "react";
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './App.css'
import Home from './components/Home'

const App = () => {
  return (
    <>
    <header>
      <h1>Lambda Eats</h1>
      <NavLink to ="/">Home</NavLink>
    </header>

    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </>
  );
};
export default App;
