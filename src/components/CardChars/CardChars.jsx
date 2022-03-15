import "./CardChars.css";
import { useState } from "react";
import { ModalEditCharacter } from "../ModalEditCharacter/ModalEditCharacter";

export function CardChars(props) {
  const [isEditCharacterModalOpen, setIsEditCharacterModalOpen] =
    useState(false);

  function handleOpenEditCharacterModal() {
    setIsEditCharacterModalOpen(true);
  }

  function handleCloseEditCharacterModal() {
    setIsEditCharacterModalOpen(false);
  }

  return (
    <>
      <div className="card" data-tooltip="Clique no card para editar ou excluir"  onClick={handleOpenEditCharacterModal}>
        <img src={props.image} alt="Imagem do personagem" />
        <div className="cardText">
          <h2>{props.name}</h2>
          <span>{props.house}</span>
          <p>Artista: {props.actor}</p>
        </div>
      </div>

      <ModalEditCharacter
        isOpen={isEditCharacterModalOpen}
        closeModal={handleCloseEditCharacterModal}
        onEdit={props.onEdit}
        name={props.name}
        house={props.house}
        image={props.image}
        actor={props.actor}
        id={props.id}
      />
    </>
  );
}
