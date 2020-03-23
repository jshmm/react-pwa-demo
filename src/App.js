import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React PWA Demo By Nay Yaung Lin Lakk
        </p>
        <a
          className="App-link"
          href="https://github.com/nayyaung9"
          target="_blank"
          rel="noopener noreferrer"
        >
          Be My Stargazers on Github
        </a>
      </header>
    </div>
  );
}

export default App;
