import "./ListChars.css";

export function ListChars(props) {
  console.log(props)
  return (
    <div className="card" key={props.id}>
      <img src={props.image} alt="Imagem do personagem" />
      <div className="cardText">
        <h2>{props.name}</h2>
        <span>{props.house}</span>
        <p>Artista: {props.actor}</p>
      </div>
    </div>
  );
}
