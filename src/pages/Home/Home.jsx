import { CardChars } from "../../components/CardChars/CardChars";
import { useState, useEffect, useContext } from "react";
/* import { characters } from "../../mocks/characters"; Dados em mock para o GET */
import { api } from "../../services/api";
import { ModalNewCharacter } from "../../components/ModalNewCharacter/ModalNewCharacter";
import { Message } from "../../components/Message/Message";

import "./Home.css";

export function Home() {
  const [chars, setChars] = useState([]);
  const [refreshChars, setRefreshChars] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/all").then((reponse) => setChars(reponse.data));
  }, [refreshChars]);

  const [isNewCharacterModalOpen, setIsNewCharacterModalOpen] =
    useState(false);

  function handleOpenNewCharacterModal() {
    setIsNewCharacterModalOpen(true);
  }

  function handleCloseNewCharacterModal() {
    setIsNewCharacterModalOpen(false);
  }

  const onChangeCharacters = ({ data }) => {
    <Message
      text={setMessage(`Personagem ${data.name} criado com suacesso! `)}
    />;
    setRefreshChars(refreshChars + 1);
  };


  return (
    <section>
      {/* <Message text={message} /> */}

      <section className="buttonCreate">
        <button type="button" onClick={handleOpenNewCharacterModal}>
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
              onEdit={onChangeCharacters}
            />
          );
        })}
      </section>

      <ModalNewCharacter
        isOpen={isNewCharacterModalOpen}
        closeModal={handleCloseNewCharacterModal}
        onCreate={onChangeCharacters}
      />
    </section>
  );
}
