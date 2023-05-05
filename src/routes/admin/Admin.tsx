import { useState } from "react";
import { QrReader } from "react-qr-reader";
import AdminComponents from "./components/Admin.styled";
import { AiOutlineExpand } from "react-icons/ai";
import { Verification, useTicket } from "hooks/UseTicket";
import { useModal } from "hooks/UseModal";
import Button from "components/button/Button";

function Admin() {
   const [ticketId, setTicketId] = useState("");
   const { openModal, closeModal } = useModal();
   const { sendVerificationCode, resendVerificationCode, issueTicket } =
      useTicket();
   const [ticketInfo, setTicketInfo] = useState<Verification | null>(null);
   const [delayScan, setDelayScan] = useState<number | undefined>(500);

   const sendCode = (ticketId: string) => {
      openModal({
         title: "티켓 발급",
         body: "티켓을 발급하시겠습니까?",
         onAccept: () => {
            issueTicket(ticketId);
            closeModal();
            setDelayScan(500);
            setTicketInfo(null);
            setTicketId("");
         },
         onDecline: () => {
            closeModal();
            setDelayScan(500);
            setTicketInfo(null);
            setTicketId("");
         },
      });
   };

   function handleScan(res: any, err: any) {
      if (res?.getText()) {
         const ticket = res?.getText();
         setTicketId(ticket);
         setDelayScan(undefined);
         sendVerificationCode(ticket).then((res) => {
            closeModal();
            setTicketInfo(res);
         });
      }
   }

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
            <AdminComponents.TicketIdSubmitButton>
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
         <AdminComponents.TicketInfoContainer>
            {ticketInfo && (
               <>
                  <div>이름: {ticketInfo.name}</div>
                  <div>학번: {ticketInfo.studentId}</div>
                  <div>학과: {ticketInfo.major}</div>
                  <div>예매번호: {ticketInfo.turn}</div>
                  <div>
                     발급 여부: {ticketInfo.issued ? "발급 됨" : "미발급"}
                  </div>
                  <div>인증 번호: {ticketInfo.code}</div>
               </>
            )}
         </AdminComponents.TicketInfoContainer>
         <Button
            disabled={ticketInfo === null || ticketInfo.issued}
            onClick={() => {
               sendCode(ticketId);
            }}
            color="rgb(2, 98, 233)"
            textColor="white"
         >
            발급하기
         </Button>
         <Button
            disabled={ticketInfo === null || ticketInfo.issued}
            onClick={() => {
               resendVerificationCode(ticketId);
            }}
            color="gray200"
            textColor="black"
         >
            인증번호 재전송
         </Button>
      </AdminComponents.Container>
   );
}

export default Admin;
