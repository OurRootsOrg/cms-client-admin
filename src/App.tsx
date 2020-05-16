import { Link, navigate, RouteComponentProps, Router } from '@reach/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import * as c from './App.style';
import Hello from './components/Hello';
import logo from './logo.svg';

export default function App(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div>
      <nav css={c.nav}>
        <NavLink to="/">{t('Home')}</NavLink>
        <NavLink to="welcome">{t('Welcome')}</NavLink>
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
  const { t } = useTranslation();
  const code = '<code>src/*.tsx</code>';
  return (
    <div css={c.app}>
      <header css={c.appHeader}>
        <img src={logo} css={c.appLogo} alt="logo" />
        <p
          dangerouslySetInnerHTML={{
            __html: t('Instructions', { code, interpolation: { escapeValue: false } }),
          }}
        />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('Learn')}
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
