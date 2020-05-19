/// <reference types="./setupTests" />

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

// Temporary hack until CRA v4 is released (soon after May 18, 2020)
// When removing this, also remove it from package.json
import MutationObserver from '@sheerun/mutationobserver-shim';
import '@testing-library/jest-dom/extend-expect';
window.MutationObserver = MutationObserver;

// Silence console logs while loading i18n
const log__ = console.log;
console.log = () => {
  // do nothing
};

require('./i18n');
require('./index.css');

console.log = log__;
