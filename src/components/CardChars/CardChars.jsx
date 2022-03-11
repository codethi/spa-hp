import "./CardChars.css";

export function CardChars(props) {
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
