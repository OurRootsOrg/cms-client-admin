import React from 'react';
import './App.css';
import Hello from './components/Hello';
import logo from './logo.svg';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <Hello compiler="TypeScript" framework="React" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/*.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
