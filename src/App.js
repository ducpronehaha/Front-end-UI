import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Homepage from './components/Hompage';
import Careers from './components/Careers';
import LayoutRoute from './components/LayoutRoute';
import About from './components/About';




class App extends Component  {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact/>
        <Route path="/careers" component={Careers} exact />
        <Route path="/about" component={About} exact/>
        
      </Switch>
       
      
    </div>
    </BrowserRouter>
  );
}
}
export default App;
