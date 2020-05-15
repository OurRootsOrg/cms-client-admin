import { css, keyframes } from '@emotion/core';

/*
 * Short .css should be placed inline in the component's .tsx file.
 * Using a separate .css file is a technique for keeping the component.tsx file
 * to a reasonable length.
 */

export const nav = css`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #f3f3f3;
`;

export const navLink = css`
  float: left;
  border: 1px solid darkgray;
  margin: 0;
  width: 60px;
  color: #000;
  padding: 12px;
  background-color: #dddddd;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #555;
    color: white;
  }

  &[active='true'] {
    background-color: #4caf50;
    color: white;
  }
`;

export const app = css`
  margin-top: 30px;
  text-align: center;

  a {
    color: #61dafb;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const appLogo = css`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`;

export const appHeader = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const welcome = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
