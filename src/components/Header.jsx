import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="headerTitle">HACKFLIX</h1>
      <div className="botonesSection">
        <ul>
          <li className="botones">
            <NavLink to="/recommendation" className="botones">
              Recommendations
            </NavLink>
          </li>
          <li className="botones">
            {" "}
            <NavLink to="/" className="botones">
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
