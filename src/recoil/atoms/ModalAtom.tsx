import { atom } from "recoil";
import { Modal } from "../../@types/modal.interface";

export const defaultModal: Modal = { isOpen: false, title: "", body: null };

export const ModalAtom = atom<Modal>({
   key: "ModalAtom",
   default: defaultModal,
});
