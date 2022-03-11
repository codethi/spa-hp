import "./ListChars.css";

export function ListChars(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Imagem do personagem" />
      <div className="cardText">
        <h2>{props.name}</h2>
        <span>{props.house}</span>
        <p>Artista: {props.actor}</p>
      </div>
    </div>
  );
}
