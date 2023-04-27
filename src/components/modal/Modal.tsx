import { createPortal } from "react-dom";
import { Modal as ModalProps } from "../../@types/modal.interface";
import { useRecoilValue } from "recoil";
import { ModalAtom } from "../../recoil/atoms/ModalAtom";

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

   return (
      <>
         {createPortal(
            "",
            document.getElementById("modal-root") as HTMLElement
         )}
         {createPortal(
            overlay,
            document.getElementById("overlay") as HTMLElement
         )}
      </>
   );
}

export default Modal;
