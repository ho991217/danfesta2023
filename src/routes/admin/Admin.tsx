import { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import AdminComponents from "./components/Admin.styled";
import { AiOutlineExpand } from "react-icons/ai";
import { useTicket } from "hooks/UseTicket";
import { useModal } from "hooks/UseModal";
import Button from "components/button/Button";

function Admin() {
   const [ticketId, setTicketId] = useState("");
   const { openModal, closeModal, isOpen } = useModal();
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
            closeModal();
         },
         onDecline: () => {
            closeModal();
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
      sendVerificationCode(ticketId).then((res) => {
         openModal({
            title: "티켓 정보",
            body: (
               <>
                  <AdminComponents.TicketInfoContainer>
                     <div>이름: {res.name}</div>
                     <div>학번: {res.studentId}</div>
                     <div>학과: {res.major}</div>
                     <div>예매번호: {res.turn}</div>
                     <div>발급 여부: {res.issued ? "발급 됨" : "미발급"}</div>
                     {res.code && <div>인증 번호: {res.code}</div>}
                  </AdminComponents.TicketInfoContainer>
                  {!res.issued && (
                     <Button
                        disabled={res === null || res.issued}
                        onClick={() => {
                           resendVerificationCode(ticketId);
                        }}
                        color="gray200"
                        textColor="black"
                     >
                        인증번호 재전송
                     </Button>
                  )}
               </>
            ),
            onAccept: () => {
               closeModal();
               sendCode(ticketId);
            },
            acceptText: res.issued ? "" : "발급",
            onDecline: () => {
               setDelayScan(500);
               closeModal();
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
