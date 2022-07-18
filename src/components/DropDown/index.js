import css from "./DropDown.module.css";
import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import Upload from "../Upload";
import { FaPlus } from "react-icons/fa";
import NavBar from "./NavBar";
import NavLoad from "./NavLoad";

function DropDown() {
  const [showModal, hideModal] = useModal(() => (
    <ReactModal
      style={{ overlay: { zIndex: 1000 } }}
      className={css.modalBox}
      ariaHideApp={false}
      isOpen
      shouldCloseOnOverlayClick={true}
      onRequestClose={hideModal}
    >
      <div>
        <Upload hideModal={hideModal} />
      </div>
      <button className={css.cornerBtn} onClick={hideModal}>
        X
      </button>
    </ReactModal>
  ));

  return (
    <NavBar>
      <NavLoad icon={<FaPlus />} popupClick={showModal} />
    </NavBar>
  );
}

export default DropDown;
