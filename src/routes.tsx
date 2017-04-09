import * as React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {List} from './components/list'
import {Settings} from './components/settings'
import {MainApp} from "./components/mainApp";
import {Login} from "./components/login";


export const Routes = () => (
  <Router>
    <div>
      <Route   path="/login" component={Login}/>
      <MainApp>
        <Route   path="/list" component={List}/>
        <Route   path="/settings" component={Settings}/>
      </MainApp>
    </div>
  </Router>
)