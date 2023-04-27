import { Modal as ModalProps } from "../../@types/modal.interface";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "../../recoil/atoms/ModalAtom";
import ModalPortal from "./ModalPortal";
import ModalComponents from "./Modal.styled";

const overlay = (
   <div
      style={{
         width: "100vw",
         height: "100vh",
         backgroundColor: "rgba(0, 0, 0, 0.5)",
         backdropFilter: "blur(5px)",
      }}
   />
);

function Modal() {
   const { isOpen, title, body, onAccept } = useRecoilValue(ModalAtom);

   return isOpen ? (
      <ModalPortal>
         <ModalComponents.Container>{title}</ModalComponents.Container>
      </ModalPortal>
   ) : null;
}

export default Modal;
