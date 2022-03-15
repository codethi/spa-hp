import { CardChars } from "../../components/CardChars/CardChars";
import { useState, useEffect, useContext } from "react";
/* import { characters } from "../../mocks/characters"; Dados em mock para o GET */
import { api } from "../../services/api";
import { ModalNewCharater } from "../../components/ModalNewCharater/ModalNewCharater";
/* import { CharacterContext } from "../../CharactersContext"; */

import "./Home.css";

export function Home() {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    api.get("/all").then((reponse) => setChars(reponse.data));
  }, []);

  /* const chars = useContext(CharacterContext) */

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <section>
      <section className="buttonCreate">
        <button type="button" onClick={handleOpenNewTransactionModal}>
          Criar Personagem
        </button>
      </section>

      <section className="cards">
        {chars.map((char) => {
          return (
            <CardChars
              key={`char_${char._id}`}
              id={char._id}
              name={char.name}
              house={char.house}
              actor={char.actor}
              image={char.image}
            />
          );
        })}
      </section>

      <ModalNewCharater
        isOpen={isNewTransactionModalOpen}
        closeModal={handleCloseNewTransactionModal}
        setChars={setChars}
      />
    </section>
  );
}
