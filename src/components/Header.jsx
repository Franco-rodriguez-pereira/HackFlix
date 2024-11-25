import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>HACKFLIX</h1>

      <ul>
        <li>
          <NavLink to="/recommendation">Recommendations</NavLink>
        </li>
        <li> <NavLink to="/">Home</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;
