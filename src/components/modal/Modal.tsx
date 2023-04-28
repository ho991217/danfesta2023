import { useRecoilValue } from "recoil";
import { ModalAtom } from "recoil/atoms/ModalAtom";
import ModalPortal from "./ModalPortal";
import ModalComponents from "./Modal.styled";
import { useModal } from "hooks/UseModal";
import Button from "components/button/Button";
import { theme } from "assets/styles/theme";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function Modal() {
   const { isOpen, title, body, onAccept, onDecline, declineText, acceptText } =
      useRecoilValue(ModalAtom);
   const { closeModal } = useModal();

   useEffect(() => {
      const body = document.querySelector("body");
      const meta = document.querySelector("meta[name=theme-color]");

      if (!body || !meta) return;

      if (isOpen) {
         body.style.overflow = "hidden";
         meta.setAttribute("content", "#797979");
      } else {
         body.style.overflow = "auto";
         meta.setAttribute("content", "#f4f4f4");
      }
   }, [isOpen]);

   return (
      <AnimatePresence>
         {isOpen && (
            <ModalPortal>
               <ModalComponents.Overlay onClick={closeModal} />
               <ModalComponents.Container>
                  <ModalComponents.Header>{title}</ModalComponents.Header>
                  <ModalComponents.Body>{body}</ModalComponents.Body>
                  <ModalComponents.ButtonBox>
                     {acceptText && (
                        <Button
                           onClick={() => {
                              onAccept?.();
                           }}
                           color={theme.color.primary}
                           textColor={theme.color.white}
                        >
                           {acceptText}
                        </Button>
                     )}
                     {declineText && (
                        <Button
                           onClick={() => {
                              onDecline?.();
                           }}
                           color={theme.color.gray100}
                           textColor={theme.color.gray900}
                        >
                           {declineText}
                        </Button>
                     )}
                  </ModalComponents.ButtonBox>
               </ModalComponents.Container>
            </ModalPortal>
         )}
      </AnimatePresence>
   );
}

export default Modal;
