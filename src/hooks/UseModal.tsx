import { useRecoilState } from "recoil";
import { ModalAtom, defaultModal } from "../recoil/atoms/ModalAtom";
import { Modal as ModalProps } from "../@types/modal.interface";

export const useModal = () => {
   const [modal, setModal] = useRecoilState(ModalAtom);

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

   const isOpen = modal.isOpen;

   return { openModal, closeModal, isOpen };
};
