///<reference path="../node_modules/@types/react-router/index.d.ts"/>
import * as React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {List} from './components/list'
import {Settings} from './components/settings'
import {MainApp} from "./components/mainApp";
import {Login} from "./components/login";
import {PageNotFound} from './components/pageNotFound'


export const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <MainApp>
          <Route exact path="/list" component={List}/>
          <Route exact path="/settings" component={Settings}/>
        </MainApp>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  </Router>
)