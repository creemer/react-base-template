import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.scss';

export class App extends Component {
    render() {
        return (
            <div>
              <div className="jumbotron">
                <div className="container">
                  <h1>Hi, world!</h1>
                  <p>This is basic App template for React/Redux/Routin development.</p>
                  <p>Based on two entry points. With Bootstrap, Jquery and Axios for async</p>
                  <p>You can add all you needed libs to /src/vendors.js</p>
                </div>
              </div>
            </div>
        );
    }
}

export default App;