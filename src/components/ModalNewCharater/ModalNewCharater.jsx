import "./ModalNewCharater.css";
import Modal from "react-modal";
import { BiX } from "react-icons/bi";
import { useState } from "react";
import { api } from "../../services/api";
import { Loading } from "../Loading/Loading";

Modal.setAppElement("#root");

export function ModalNewCharater({ isOpen, closeModal, setChars }) {
  const [values, setVelues] = useState();

  const handleChangeValues = (value) => {
    setVelues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleCreateNewCharacter = async (event) => {
    event.preventDefault();
    <Loading/>
    const response = await api.post("/create", values);
    setChars(response)
    closeModal();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        overlayClassName="overley-react-modal"
        className="content-react-modal"
      >
        <button type="button" onClick={closeModal} className="close-button">
          <BiX />
        </button>

        <h2>Criar Personagem</h2>
        <form onSubmit={handleCreateNewCharacter}>
          <input
            type="text"
            id="name"
            placeholder="Nome do personagem"
            name="name"
            onChange={handleChangeValues}
          />

          <input
            type="text"
            id="house"
            placeholder="Casa do personagem"
            name="house"
            onChange={handleChangeValues}
          />

          <input
            type="text"
            id="actor"
            placeholder="Artista do personagem"
            name="actor"
            onChange={handleChangeValues}
          />

          <input
            type="text"
            id="image"
            placeholder="Link da Imagem do personagem"
            name="image"
            onChange={handleChangeValues}
          />

          <button type="submit">Cadastrar</button>
        </form>
      </Modal>
    </>
  );
}
