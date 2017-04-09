import {Link} from 'react-router-dom'

export const MainMenu = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/settings">Settings</Link></li>
    </ul>
    <hr/>
  </div>
)