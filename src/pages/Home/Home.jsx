import { ListChars } from "../../components/ListChars/ListChars";
import { useState, useEffect } from "react";
import { characters } from "../../mocks/characters";

import "./Home.css";

export function Home() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setChars(characters);
  }, []);

  return (
    <section className="cards">
      {chars.map((char) => {
        return (
          <ListChars
            key={char.id}
            name={char.name}
            house={char.house}
            actor={char.actor}
            image={char.image}
          />
        );
      })}
    </section>
  );
}
