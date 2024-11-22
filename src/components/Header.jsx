import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>HACKFLIX</h1>

      <ul>
        <li>
          <Link to="/">Recomendaciones</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
