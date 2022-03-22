import React, {Component, useState} from 'react';
import {BrowserRouter as Router,  Switch,  Redirect,  Route} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import Uslugi from './Pages/Uslugi';
import Mastera from './Pages/Mastera';
import forma from './Pages/SignIn';
import formatwo from './Pages/SignUp';
import Order from './Component/Orders';

function App() {
  return (
    <>
    <Router>
    <Switch>
      <Route exact path='/contact' component={Contacts}/> 
      <Route exact path='/home' component={Home}/>
      <Route exact path='/uslugi' component={Uslugi}/>
      <Route exact path='/mastera' component={Mastera}/>
      <Route exact path='/signin' component={forma}/>
      <Route exact path='/signup' component={formatwo}/>
      <Route exact path='/order' component={Order}/>
      <Redirect from = '/' to = '/home'/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
