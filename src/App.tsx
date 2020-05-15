import { Link, navigate, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import * as c from './App.style';
import Hello from './components/Hello';
import logo from './logo.svg';

export default function App(): JSX.Element {
  return (
    <div>
      <nav css={c.nav}>
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
    <Link
      css={c.navLink}
      {...props}
      getProps={({ isCurrent }) => ({ active: isCurrent.toString() })}
    />
  );
}

function Home(_props: RouteComponentProps): JSX.Element {
  return (
    <div css={c.app}>
      <header css={c.appHeader}>
        <img src={logo} css={c.appLogo} alt="logo" />
        <p>
          Edit <code>src/*.tsx</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

function Welcome(_props: RouteComponentProps): JSX.Element {
  return (
    <div css={c.welcome}>
      <Hello compiler="TypeScript" framework="React" />
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
}
