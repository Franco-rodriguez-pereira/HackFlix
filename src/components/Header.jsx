import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>HACKFLIX</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "linkActivo" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recommendation"
              className={({ isActive }) => (isActive ? "linkActivo" : "")}
            >
              Recommendations
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
