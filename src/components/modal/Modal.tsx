import { useRecoilValue } from "recoil";
import { ModalAtom } from "recoil/atoms/ModalAtom";
import ModalPortal from "./ModalPortal";
import ModalComponents from "./Modal.styled";
import { useModal } from "hooks/UseModal";
import Button from "components/button/Button";
import { theme } from "assets/styles/theme";
import { AnimatePresence } from "framer-motion";

function Modal() {
   const { isOpen, title, body, onAccept, declineText, acceptText } =
      useRecoilValue(ModalAtom);
   const { closeModal } = useModal();

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
                           onClick={closeModal}
                           color={theme.color.primary}
                           textColor={theme.color.white}
                        >
                           {acceptText}
                        </Button>
                     )}
                     {declineText && (
                        <Button
                           onClick={closeModal}
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
