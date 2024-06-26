import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>

        <li>
          <Link to="/shoutit">Shout It</Link>
        </li>

        <li>
          <Link to="/color">Color</Link>
        </li>

      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
