import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import Details from './details/Details';


class Controller extends Component {
  constructor() {
    super();
    this.baseUrl = 'http://localhost:8080/api/';
  }
  render() {
    return (
      <Router>
        <div className="main-container">
          <Route exact path='/' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
          <Route path='/restaurant/:restaurantId' render={(props) => <Details {...props} baseUrl={this.baseUrl} />} />
        </div>
      </Router>
    )
  }
}

export default Controller;