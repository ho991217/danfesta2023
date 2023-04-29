import axios from "axios";
import { useRecoilState } from "recoil";
import { TicketAtom } from "recoil/atoms/TicketAtom";

export interface Verification {
   id: number;
   name: string; // 이름
   major: string; // 전공
   studentId: string; // 학번
   issued: boolean; // 팔찌 발급 여부
   turn: number; // 예매번호
   code: string; // sms 인증코드
}

const EVETN_ID = [8440];

export const useTicket = () => {
   const [ticket, setTicket] = useRecoilState(TicketAtom);

   const getTicketInfo = async () => {
      // 서버에서 티켓 정보를 가져온다.

      return "8100";
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

   return {
      getTicketInfo,
      openTicket,
      closeTicket,
      sendVerificationCode,
   };
};
