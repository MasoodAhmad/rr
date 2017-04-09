import {Header} from './header'
import {Footer} from './footer'

export const MainApp = (props) => (
  <div>This is main app
    <Header/>
    {' '}
    <div>{props.children}</div>
    <Footer/>
  </div>
)

// need header in all the app. Header also has main menu
// here the list or settings componenet should load
// need footer in all the app.