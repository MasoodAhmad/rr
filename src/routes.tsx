import * as React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import {List} from './components/list'
import {Settings} from './components/settings'
import {MainApp} from "./components/mainApp";


export const Routes = () => (
  <Router>
    <div>
      <MainApp>
        <Route  path="/list" component={List}/>
        <Route  path="/settings" component={Settings}/>
      </MainApp>


    </div>
  </Router>
)