import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "../styles/Router.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhoneSelect from "./PhoneSelect";
import About from "./About";
import Reviews from "./Reviews";
import Tracking from "./Tracking";
import Support from "./Support";
import Contact from "./Contact";

class Router extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>             
            <Route path='/about-us' component={About}/>
            <Route path='/reviews' component={Reviews}/>
            <Route path='/tracking' component={Tracking}/>
            <Route path='/support' component={Support}/>
            <Route path='/contact-us' component={Contact}/>
            <Route path="/" component={PhoneSelect}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
