import { atom } from "recoil";
import { Modal } from "../../@types/modal.interface";

export const defaultModal: Modal = {
   isOpen: false,
   title: "모달 타이틀",
   body: "모달 바디",
   declineText: "취소",
   acceptText: "확인",
};

export const ModalAtom = atom<Modal>({
   key: "ModalAtom",
   default: defaultModal,
});
