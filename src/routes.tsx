///<reference path="../node_modules/@types/react-router/index.d.ts"/>
import * as React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {List} from './components/list'
import {Settings} from './components/settings'
import {MainApp} from "./components/mainApp";
import {Login} from "./components/login";
import {PageNotFound} from './components/pageNotFound'
import {User, UserID, UserStatic} from "./components/User";


export const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <MainApp>
          <Route path="/list" component={List}/>
          <Route path="/settings" component={Settings}/>
          <Switch>
            <User path="/user" >
              <Switch>
                <Route exact path="/user/staticUser" component={UserStatic} />
                <Route exact path="/user/:id" component={UserID} />
              </Switch>
            </User>
          </Switch>
        </MainApp>
        <Route path="*" component={PageNotFound}/>
      </Switch>
    </div>
  </Router>
)