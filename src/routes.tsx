///<reference path="../node_modules/@types/react-router/index.d.ts"/>
import * as React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {List} from './components/list'
import {Settings} from './components/settings'
import {MainApp} from "./components/mainApp";
import {Login} from "./components/login";
import {PageNotFound} from './components/pageNotFound'
import {User, UserID, UserStatic} from "./components/User";
import {Header} from "./components/header";
import {Footer} from "./components/footer";


// export const Routes = () => (
  {/*<Router>*/}
    {/*<div>*/}
      {/*<Switch>*/}
        {/*<Route exact path="/login" component={Login}/>*/}
        {/*<MainApp>*/}
          {/*<Route path="/list" component={List}/>*/}
          {/*<Route path="/settings" component={Settings}/>*/}
          {/*<Switch>*/}
            {/*<User path="/user" >*/}
              {/*<Switch>*/}
                {/*<Route exact path="/user/staticUser" component={UserStatic} />*/}
                {/*<Route exact path="/user/:id" component={UserID} />*/}
              {/*</Switch>*/}
            {/*</User>*/}
          {/*</Switch>*/}
        {/*</MainApp>*/}
        {/*<Route path="*" component={PageNotFound}/>*/}
      {/*</Switch>*/}
    {/*</div>*/}
  {/*</Router>*/}
{/*)*/}

// class App extends Component {
//   render() {
//
//     const Header = () => <h1>My header</h1>;
//     const Footer = () => <h2>My footer</h2>;
//     const Login = () => <p>Login Component</p>;
//     const Home = () => <p>Home Page</p>;
//     const List = () => <p>List Page</p>;
//     const Settings = () => <p>Settings Page</p>;
//     const PageNotFound = () => <h1>Uh oh, not found!</h1>;
//
    const MainAppContainer = ({ component, ...rest }) => {
      return (
        <div>
          <Header />
          <Route {...rest} render={component} />
          <Footer />
        </div>
      );
    };
//
    export const Routes = () => (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <MainAppContainer exact path="/" component={MainApp} />
            <MainAppContainer path="/list" component={List} />
            <MainAppContainer path="/settings" component={Settings} />
            <MainAppContainer path="/user/:id/create" component={UserID} />
            <MainAppContainer path="/user/:id/view" component={UserID} />
            <MainAppContainer path="/user/:id/edit" component={UserID} />
            <MainAppContainer path="/user/:id/delete" component={UserID} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
//   }
// }
//
// export default App;