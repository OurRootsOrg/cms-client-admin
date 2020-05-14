import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import './App.css';
import Hello from './components/Hello';
import logo from './logo.svg';

export default function App(): JSX.Element {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/welcome">Welcome</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
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

function Welcome(): JSX.Element {
  const history = useHistory();
  return (
    <div className="Welcome">
      <Hello compiler="TypeScript" framework="React" />
      <button onClick={() => history.push('/home')}>Home</button>
    </div>
  );
}
