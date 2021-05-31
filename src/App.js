import React from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './containers/Home/home'
import About from './containers/Home/about'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component = {Home}/>
          <Route exact path='/about' component = {About}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
