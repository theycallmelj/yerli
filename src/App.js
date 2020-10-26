import React from 'react';
import logo from './logo.svg';
import Feed from './components/Feed.js'
import Navbar from './components/Navbar.js'
import Socials from './components/Socials.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Feed/>
      </header>
      <Socials/>
    </div>
  );
}

export default App;
