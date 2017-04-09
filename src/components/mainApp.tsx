import {Header} from './header'
import {Footer} from './footer'

export const MainApp = (props) => (
  <div>This is main app
    <Header/>                   // need header in all the app. Header also has main menu
    {' '}
    <div>{props.children}</div> // here the list or settings componenet should load
    <Footer/>                   // need footer in all the app.
  </div>
)