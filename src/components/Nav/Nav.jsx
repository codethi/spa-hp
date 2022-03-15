import "./Nav.css";
import icon from "../../images/icon.png";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <>
      <nav>
        <ul>
          <div className="nav-title">
            <li>
              <img src={icon} alt="Logo Hp" />
            </li>
            <li>
              <h1 className="nav-h1">Personagens do Harry Potter</h1>
            </li>
          </div>

          <div className="nav-links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
