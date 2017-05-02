import {Header} from './header'
import {Footer} from './footer'
import {Route} from "react-router-dom";
import * as React from 'react'

export const MainApp = ({ component, ...rest }) => (
    <div>
      {/*<Header />*/}
      {/*<Route {...rest} render={ () => React.createElement(component) } />*/}
      {/*<Footer />*/}
    </div>
  )


// need header in all the app. Header also has main menu
// here the list or settings componenet should load
// need footer in all the app.