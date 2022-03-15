import "./ModalConfirmDelete.css";
import Modal from "react-modal";
import { api } from "../../services/api";
import { BiX } from "react-icons/bi";

export function ModalConfirmDelete(props) {
  const handleDeleteCharacter = async () => {
    const response = await api.delete(`/${props.id}`);
    props.onEdit(response);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      overlayClassName="overley-react-modal"
      className="content-react-modal"
    >
      <button type="button" onClick={props.closeModal} className="close-button">
        <BiX />
      </button>

      <h2 className="text-delete">Deseja realmente apagar o personagem {props.name}?</h2>

      <div className="btns-delete">
        <button className="delete-modal-btn-no" onClick={props.closeModal}>
          Não
        </button>
        <button className="delete-modal-btn-yes" onClick={handleDeleteCharacter}>
          Sim
        </button>
      </div>
    </Modal>
  );
}
