import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Homepage from './Hompage';
import Joblistings from './Careers';

class RouterURL extends Component {
    render() {
        return(
            
     <header className="site-navbar mt-3">
          <div className="container-fluid">
            <div className="row align-items-center"></div>
              <div className="site-logo col-4"><img src="images/download.png" width="40px"/></div>
              <div className="site-logo col-5"><a href="index.html">&nbsp; &nbsp; Enclave</a></div>
              <nav className="mx-auto site-navigation">
                <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                  <li><a><NavLink to="/">Home</NavLink></a></li>
                  <li><a ><NavLink to="/careers">Joblistings</NavLink></a></li>
                  <li><a >About</a></li>
                  <li><a >Services</a></li>
                  <li><a >Apply</a></li>
                  <li className="d-lg-none"><a >Contact Us</a></li>
                </ul>
              </nav>
            </div>
         
     </header>
            
        )
    }
}
export default RouterURL;