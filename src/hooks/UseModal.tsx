import { useSetRecoilState } from "recoil";
import { ModalAtom, defaultModal } from "../recoil/atoms/ModalAtom";

interface ModalProps {
   title: string;
   body: string | React.ReactElement;
   declineText?: string;
   acceptText?: string;
}

export const useModal = () => {
   const setModal = useSetRecoilState(ModalAtom);
   const openModal = ({ title, body }: ModalProps) => {
      setModal((prev) => {
         return {
            ...prev,
            isOpen: true,
            title,
            body,
         };
      });
   };

   const closeModal = () => {
      setModal(defaultModal);
   };

   return { openModal, closeModal };
};
