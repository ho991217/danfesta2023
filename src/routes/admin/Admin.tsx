import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import AdminComponents from "./components/Admin.styled";
import { AiOutlineExpand } from "react-icons/ai";
import { useTicket } from "hooks/UseTicket";
import { useModal } from "hooks/UseModal";
import Button from "components/button/Button";
import { Verification } from "types/Verification.type";

function Admin() {
   const [ticketId, setTicketId] = useState("");
   const { openModal, isOpen } = useModal();
   const { sendVerificationCode, resendVerificationCode, issueTicket } =
      useTicket();
   const [delayScan, setDelayScan] = useState<number | undefined>(500);

   useEffect(() => {
      if (!isOpen) {
         setDelayScan(500);
         setTicketId("");
      }
   }, [isOpen]);

   const sendCode = (ticketId: string) => {
      openModal({
         title: "티켓 발급",
         body: "티켓을 발급하시겠습니까?",
         onAccept: () => {
            issueTicket(ticketId);
         },
      });
   };

   function handleScan(res: any, err: any) {
      if (res?.getText()) {
         const ticket = res?.getText();
         setTicketId(ticket);
         setDelayScan(undefined);
         openScanModal(ticket);
      }
   }

   const openScanModal = (ticketId: string) => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth() + 1;
      const currentDate = now.getDate();
      sendVerificationCode(ticketId).then((res) => {
         let eventMessage = "";
         if(res.id === -9999) {
            eventMessage = "Ticket ID에 해당하는 티켓정보가 없습니다. Ticket ID를 잘못 입력하셨거나, 조작된 QR 일 수 있습니다.";
         } else if (currentYear === 2023 && currentMonth === 5 && currentDate === 17) {
            if (res.eventId === 8440) {
               
            } else {
               eventMessage = "17일차 공연 티켓이 아닙니다.";
            }
         } else if (currentYear === 2023 && currentMonth === 5 && currentDate === 18) {
            if (res.eventId === 8441) {

            } else {
               eventMessage = "18일차 공연 티켓이 아닙니다.";
            }
         }

      
         if (eventMessage) {
            openModal({
               title: "티켓 정보",
               dontCloseOnEsc: true,
               body: <div>{eventMessage}</div>,
               onAccept: () => {
                  // ...
               },
               acceptText: "",
               onDecline: () => {
                  // ...
               },
               declineText: "닫기",
            });
            return;
         }

         openModal({
            title: "티켓 정보",
            dontCloseOnEsc: true,
            body: (
               <AdminComponents.TicketInfoContainer>
                  <div>이름: {res.name}</div>
                  <div>학번: {res.studentId}</div>
                  <div>학과: {res.major}</div>
                  <div>예매번호: {res.turn}</div>
                  <div>발급 여부: {res.issued ? "발급 됨" : "미발급"}</div>
                  {res.code && <div>인증 번호: {res.code}</div>}
                  <div>이벤트 ID: {res.eventId}</div>
               </AdminComponents.TicketInfoContainer>
            ),
            onAccept: () => {
               sendCode(ticketId);
            },
            acceptText: res.issued ? "" : "발급",
            onDecline: () => {
               setDelayScan(500);
            },
            declineText: res.issued ? "닫기" : "취소",
         });
      });
   };

   return (
      <AdminComponents.Container>
         QR코드가 인식되지 않는 경우
         <AdminComponents.TicketIdContainer>
            <AdminComponents.TicketIdInput
               placeholder="티켓 아이디 입력"
               type="number"
               pattern="\d*"
               value={ticketId}
               onChange={(e) => setTicketId(e.target.value)}
            />
            <AdminComponents.TicketIdSubmitButton
               onClick={(e) => {
                  e.preventDefault();
                  openScanModal(ticketId);
               }}
            >
               전송
            </AdminComponents.TicketIdSubmitButton>
         </AdminComponents.TicketIdContainer>
         <AdminComponents.QrReaderContainer>
            <AiOutlineExpand
               style={{
                  position: "absolute",
                  bottom: "50%",
                  right: "50%",
                  zIndex: 99,
                  color: "rgba(255, 255, 255, 0.75)",
                  transform: "translate(50%, 50%) ",
                  fontSize: "20rem",
               }}
            />

            {delayScan !== undefined && (
               <QrReader
                  constraints={{
                     facingMode: "environment",
                  }}
                  scanDelay={delayScan}
                  onResult={handleScan}
               />
            )}

            {delayScan === undefined && (
               <span
                  style={{
                     position: "absolute",
                     bottom: "50%",
                     right: "50%",
                     transform: "translate(50%, 50%)",
                  }}
               >
                  인식되었습니다.
               </span>
            )}
         </AdminComponents.QrReaderContainer>
      </AdminComponents.Container>
   );
}

export default Admin;
