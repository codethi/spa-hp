import { useState, useEffect } from "react";
import { characters } from "./mocks/characters";
import { ListChars } from "./components/ListChars";

import './App.css'

function App() {
  const [chars, setCharacters] = useState(characters);

  

  return (
    <div className="cards">
      {chars.map((char) => {
        return (
          <ListChars
            key={chars.id}
            name={char.name}
            house={char.house}
            actor={char.actor}
            image={char.image}
          />
        );
      })}
    </div>
  );
}

export default App;
