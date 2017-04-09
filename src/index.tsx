
import * as React from 'react'; //using * instead of 'import React from 'react' due to es6/TS issues. React does not have compatible 'default export'
import {render} from 'react-dom';
import {Routes} from './routes'
import {Header} from './components/header'
import {Footer} from './components/footer'


(window as any).React = React;

render(
  <Routes/>
  ,document.getElementById("react-container")
);