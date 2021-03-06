
import * as React from 'react'; //using * instead of 'import React from 'react' due to es6/TS issues. React does not have compatible 'default export'
import {render} from 'react-dom';
import {Routes} from './routes'
import {Provider} from "react-redux"
import storeFactory from "./store"
import sampleState from  "./Constants/initialState"


const store:any = (storeFactory(sampleState) as any);

(window as any).React = React;

render(
  <Provider store={store}>
    <Routes/>
  </Provider>
  ,document.getElementById("react-container")
);