import { useModal } from "./UseModal";

export const useErrorModal = () => {
   const { openModal, closeModal } = useModal();

   const openErrorModal = ({ errorMsg }: { errorMsg: string }) => {
      openModal({
         title: "오류가 발생했습니다.",
         body: errorMsg,
         acceptText: "",
         declineText: "닫기",
         onDecline: () => {
            closeModal();
         },
      });
   };

   const closeErrorModal = () => {
      closeModal();
   };

   return { openErrorModal, closeErrorModal };
};
