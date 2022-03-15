import { createContext, useState, useEffect } from "react";
import { api } from "./services/api";

export const CharactersContext = createContext([]);

export function CharacterProvider() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    api.get("/all").then((reponse) => setChars(reponse.data));
  }, []);

  return (
    <CharactersContext.Provider value={chars}>
      
    </CharactersContext.Provider>
  );
}
