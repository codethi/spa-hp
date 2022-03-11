import { ListChars } from "../../components/ListChars/ListChars";
import { useState, useEffect } from "react";
import { characters } from "../../mocks/characters";

export function Home() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    setChars(characters);
  }, [chars]);

  return (
    <section className="cards">
      {chars.map((char) => {
        <ListChars
          name={char.name}
          house={char.house}
          actor={char.actor}
          image={char.image}
          key={char.id}
        />;
      })}
    </section>
  );
}
