import './ModalEditCharacter.css'
import Modal from "react-modal";
import { useState } from "react";
import { api } from "../../services/api";
import { BiX } from "react-icons/bi";
import { Loading } from "../Loading/Loading";

export function ModalEditCharacter(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    house: props.house,
    image: props.image,
    actor: props.actor,
  });

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const handleUpdateCharacter = async (event) => {
    event.preventDefault();
    const response = await api.put(`/${props.id}`, {
      name: editValues.name,
      house: editValues.house,
      image: editValues.image,
      actor: editValues.actor,
    });
    props.onEdit(response);
    props.closeModal();
  };

  const handleDeleteCharacter = async (event) => {
    event.preventDefault();
    
  }

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        overlayClassName="overley-react-modal"
        className="content-react-modal"
      >
        <button type="button" onClick={props.closeModal} className="close-button">
          <BiX />
        </button>

        <h2>Editar Personagem</h2>
        <form>
          <input
            type="text"
            id="name"
            placeholder="Nome do personagem"
            name="name"
            onChange={handleChangeValues}
            defaultValue={props.name}
          />

          <input
            type="text"
            id="house"
            placeholder="Casa do personagem"
            name="house"
            onChange={handleChangeValues}
            defaultValue={props.house}
          />

          <input
            type="text"
            id="actor"
            placeholder="Artista do personagem"
            name="actor"
            onChange={handleChangeValues}
            defaultValue={props.actor}
          />

          <input
            type="text"
            id="image"
            placeholder="Link da Imagem do personagem"
            name="image"
            onChange={handleChangeValues}
            defaultValue={props.image}
          />

          <div className="btns">
            <button className="edit-modal" onClick={handleUpdateCharacter}>Atualizar</button>
            <button className="edit-modal" onClick={handleDeleteCharacter}>Excluir</button>
          </div>

        </form>
      </Modal>
    </>
  );
}