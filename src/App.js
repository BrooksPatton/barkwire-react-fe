import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <Link to={"/"}>
              <h1>BarkWire</h1>
            </Link>
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
