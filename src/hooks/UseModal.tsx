import { useSetRecoilState } from "recoil";
import { ModalAtom, defaultModal } from "../recoil/atoms/ModalAtom";
import { Modal as ModalProps } from "../@types/modal.interface";

export const useModal = () => {
   const setModal = useSetRecoilState(ModalAtom);

   const openModal = (props: Omit<ModalProps, "isOpen">) => {
      setModal((prev) => ({
         ...prev,
         isOpen: true,
         ...props,
      }));
   };

   const closeModal = () => {
      setModal(defaultModal);
   };

   return { openModal, closeModal };
};
