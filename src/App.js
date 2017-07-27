import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DogList from './DogList';

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
          <Route exact path="/" component={DogList} />
        </div>
      </Router>
    );
  }
}

export default App;
