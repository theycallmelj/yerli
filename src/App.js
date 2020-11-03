import React from 'react';
import logo from './logo.svg';
import Feed from './components/feed/Feed.js'
import Navbar from './components/Navbar.js'
import Socials from './components/Socials.js'
import Map from './components/Map'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/map" exact component={Map} />
          </Switch>
        </Router>
      </header>
      <Socials />
    </div>
  );
}

export default App;
