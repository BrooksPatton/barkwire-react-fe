import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import DogList from './DogList';
import {Provider} from 'react-redux';
import {store} from './redux/dogStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
