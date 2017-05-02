import {Link} from 'react-router-dom'

export const MainMenu = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link> parent of all (almost)</li>
      <li><Link to="/list">List</Link> inside home</li>
      <li><Link to="/settings">Settings</Link> inside home</li>
      <li><Link to="/login">Login</Link> standalone</li>
      <li><Link to="/user">Users</Link> inside home, For now just showing itself. It has further pages. </li>
      <li><Link to="/user/123">User/123</Link> inside user with /:id</li>
      <li><Link to="/user/staticUser">User/staticUser</Link> inside user with static route</li>
      <li><Link to="/someGarbage">garbage</Link> not a route defined (not working as expected)</li>
    </ul>
    <hr/>
  </div>
)