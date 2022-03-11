import "./Nav.css";
import icon from "../../images/icon.png"

export function Nav() {
  return (
    <>
      <nav>
          <ul>
              <li><img src={icon} alt="Logo Hp" /></li>
              <li><a href="/">Inicio</a></li>
              <li><a href="/register">Cadastro</a></li>
          </ul>
      </nav>
    </>
  );
}
