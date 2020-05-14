import { Link, navigate, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import './App.css';
import Hello from './components/Hello';
import logo from './logo.svg';

export default function App(): JSX.Element {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="welcome">Welcome</NavLink>
      </nav>
      <Router>
        <Home path="/" />
        <Welcome path="/welcome" />
      </Router>
    </div>
  );
}

type NavProps = RouteComponentProps & {
  to: string;
  children?: React.ReactNode;
};
function NavLink(props: NavProps): JSX.Element {
  return (
    <Link {...props} getProps={({ isCurrent }) => (isCurrent ? { className: 'active' } : {})} />
  );
}

function Home(_props: RouteComponentProps): JSX.Element {
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

function Welcome(_props: RouteComponentProps): JSX.Element {
  return (
    <div className="Welcome">
      <Hello compiler="TypeScript" framework="React" />
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}
