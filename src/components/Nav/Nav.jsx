import "./Nav.css";
import icon from "../../images/icon.png";

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
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/register">Cadastro</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
