import axios from "axios";
import { EVENTID } from "eventId";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TicketAtom } from "recoil/atoms/TicketAtom";
import { useErrorModal } from "./UseErrorModal";
import { useModal } from "./UseModal";
import { useLogin } from "./UseLogin";

export interface Verification {
   id: number;
   name: string; // 이름
   major: string; // 전공
   studentId: string; // 학번
   issued: boolean; // 팔찌 발급 여부
   turn: number; // 예매번호
   code: string; // sms 인증코드
}

export const useTicket = () => {
   const [ticket, setTicket] = useRecoilState(TicketAtom);
   const { openErrorModal } = useErrorModal();
   const { openModal, closeModal } = useModal();
   const { isLogin } = useLogin();

   useEffect(() => {
      // 호출시에 내 티켓이 있는지 확인
      if (isLogin()) fetchTicketInfo();
   }, []);

   const hasTicket = () => ticket.info[0].id !== 0 || ticket.info[1].id !== 0;

   const getTicketInfo = () => {
      fetchTicketInfo();

      if (hasTicket()) {
         return ticket.info;
      }
   };

   const getTicketTurn = async (eventId: EVENTID) => {
      try {
         const { data } = await axios({
            method: "GET",
            url: `/ticket/reservation/${eventId}`,
            headers: {
               Authorization: `Bearer ${localStorage.getItem("access-token")}`,
            },
         });

         return data.turn;
      } catch {}
   };

   const fetchTicketInfo = async (): Promise<
      string | [string, string] | null
   > => {
      try {
         const day1 = await fetchTicketDay({ day: EVENTID["1일차"] });

         setTicket((prev) => ({
            ...prev,
            info: [
               {
                  ...prev.info[0],
                  id: day1.id ?? 0,
                  turn: day1.turn ?? 0,
                  distributed: day1.issued,
               },
               {
                  ...prev.info[1],
               },
            ],
         }));
      } catch (e) {}
      try {
         const day2 = await fetchTicketDay({ day: EVENTID["2일차"] });
         setTicket((prev) => ({
            ...prev,
            info: [
               {
                  ...prev.info[0],
               },
               {
                  ...prev.info[1],
                  id: day2.id ?? 0,
                  turn: day2.turn ?? 0,
                  distributed: day2.issued,
               },
            ],
         }));
      } catch (e) {}

      return null;
   };

   const fetchTicketDay = async ({ day }: { day: EVENTID }) => {
      const { data } = await axios({
         method: "GET",
         url: `/ticket/event/${day}`,
         headers: {
            Authorization: `Bearer ${localStorage.getItem("access-token")}`,
         },
      });

      return data;
   };

   const issueTicket = async (ticketId: string) => {
      try {
         await axios({
            method: "POST",
            url: `/ticket/${ticketId}/permit`,
         });
         openModal({
            title: "티켓 발급 성공",
            body: "티켓 발급에 성공했습니다.",
            declineText: "",
            acceptText: "확인",
            onAccept: () => {
               closeModal();
            },
         });
      } catch (e) {
         openErrorModal({
            errorMsg: "티켓 발급에 실패했습니다.",
         });
      }
   };

   const sendVerificationCode = async (ticketId: string) => {
      const { data }: { data: Verification } = await axios({
         method: "GET",
         url: `/ticket/${ticketId}`,
      });

      return data;
   };

   const resendVerificationCode = async (ticketId: string) => {
      try {
         const { code }: { code: Verification["code"] } = await axios({
            method: "GET",
            url: `/ticket/${ticketId}/sms`,
         });

         return code;
      } catch (e) {
         openErrorModal({
            errorMsg: "인증번호 발송에 실패했습니다.",
         });
      }
   };

   const openTicket = () => {
      if (hasTicket()) {
         setTicket((prev) => ({
            ...prev,
            isOpen: true,
         }));
      } else {
         openModal({
            title: "티켓이 없습니다",
            body: "티켓이 없습니다.",
            declineText: "",
            onAccept: () => {
               closeModal();
            },
         });
      }
   };

   const closeTicket = () => {
      setTicket((prev) => ({
         ...prev,
         isOpen: false,
      }));
   };

   const isTicketOpen = () => {
      return ticket.isOpen;
   };

   return {
      getTicketInfo,
      openTicket,
      closeTicket,
      sendVerificationCode,
      isTicketOpen,
      hasTicket,
      issueTicket,
      resendVerificationCode,
      getTicketTurn,
   };
};
