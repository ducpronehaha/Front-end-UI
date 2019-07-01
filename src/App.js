import React, { Component } from 'react';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/CustomNavbar';
import Homepage from './components/Hompage';
import Careers from './components/Careers';




class App extends Component  {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/careers" component={Careers} />
        
      </Switch>
       
      
    </div>
    </BrowserRouter>
  );
}
}
export default App;
