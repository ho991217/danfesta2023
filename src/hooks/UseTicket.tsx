import axios from "axios";
import { EVENTID } from "eventId";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { TicketAtom } from "recoil/atoms/TicketAtom";
import { useErrorModal } from "./UseErrorModal";

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

   useEffect(() => {
      // 호출시에 내 티켓이 있는지 확인
      fetchTicketInfo();
   }, []);

   const hasTicket = () => ticket.info[0].id !== 0 || ticket.info[1].id !== 0;

   const getTicketInfo = () => {
      fetchTicketInfo();

      if (hasTicket()) {
         return ticket.info;
      }
   };

   const fetchTicketInfo = async (): Promise<
      string | [string, string] | null
   > => {
      try {
         const [{ data: day1 }, { data: day2 }] = await axios.all([
            axios({
               method: "GET",
               url: `/ticket/event/${EVENTID["1일차"]}`,
               headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                     "access-token"
                  )}`,
               },
            }),
            axios({
               method: "GET",
               url: `/ticket/event/${EVENTID["2일차"]}`,
               headers: {
                  Authorization: `Bearer ${localStorage.getItem(
                     "access-token"
                  )}`,
               },
            }),
         ]);

         setTicket((prev) => ({
            ...prev,
            info: [
               {
                  ...prev.info[0],
                  id: day1.id,
                  turn: day1.turn,
               },
               {
                  ...prev.info[1],
                  id: day2.id,
                  turn: day2.turn,
               },
            ],
         }));
      } catch (e) {
         const {
            response: { data },
         } = e as any;
         openErrorModal(data.message[0]);
      }

      return null;
   };

   const sendVerificationCode = async (ticketId: string) => {
      console.log(ticketId);
      // 서버에 티켓을 발급한다.
      const { data }: { data: Verification } = await axios({
         method: "GET",
         url: `/ticket/${ticketId}`,
      });

      return data;
   };

   const openTicket = () => {
      setTicket((prev) => ({
         ...prev,
         isOpen: true,
      }));
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
   };
};
