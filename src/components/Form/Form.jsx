import { useState } from "react";
import "./Form.css";

import {characters} from "../../mocks/characters";

export function Form() {
  const [values, setVelues] = useState();

  const changeValues = (value) => {
    setVelues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const clickButton = () => {
    characters.push(values);
    console.log(characters);
  };

  return (
    <section className="form-space">
      <form>

        <input
          type="text"
          id="name"
          placeholder="Nome do personagem"
          name="name"
          onChange={changeValues}
        />

        <input
          type="text"
          id="house"
          placeholder="Casa do personagem"
          name="house"
          onChange={changeValues}
        />

        <input
          type="text"
          id="actor"
          placeholder="Artista do personagem"
          name="actor"
          onChange={changeValues}
        />

        <input
          type="text"
          id="image"
          placeholder="Link da Imagem do personagem"
          name="image"
          onChange={changeValues}
        />

        <button onClick={clickButton}>Cadastrar</button>
      </form>
    </section>
  );
}
