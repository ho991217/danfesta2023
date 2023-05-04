import styled from "styled-components";
import { ReactComponent as QrIcon } from "assets/icons/qr.svg";
import { ReactComponent as QrBarIcon } from "assets/icons/qr_bar.svg";
import { motion } from "framer-motion";
import { useTicket } from "hooks/UseTicket";

const Container = styled.div`
   width: 100%;
   height: 135px;
   background-color: #232323;
   border-radius: 10px;
   margin-bottom: 13px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 17px;
`;

const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   height: 100%;
`;

const Title = styled.h6`
   font-size: 14px;
   font-weight: 700;
   color: ${({ theme }) => theme.color.white};
`;

const Infos = styled.div`
   display: flex;
   flex-direction: column;
   span {
      font-size: 11px;
      color: #979797;
   }
   strong {
      font-size: 17px;
      color: #006aff;
   }
`;

const Notice = styled.span`
   font-size: 8px;
   color: #979797;
   line-height: 1.45em;
   font-weight: 300;
`;

const ButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: 10px;
   color: white;
   font-weight: 700;
`;

const QrButton = styled.button`
   width: 80px;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   background-color: #363636;
   border: none;
   margin-bottom: 5px;
   position: relative;
`;

const MotionQrBase = styled(QrIcon)`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

const MotionQrBar = styled(motion(QrBarIcon))`
   position: absolute;
   left: 50%;
   transform: translate(-50%, -50%);
`;

function TicketTile() {
   const { openTicket, hasTicket } = useTicket();

   return (
      <Container>
         <InfoContainer>
            <Title>단페스타 모바일 티켓 시스템</Title>
            <Infos>
               <span>티켓팅 유무</span>
               <strong>
                  {hasTicket() ? "티켓이 있습니다." : "티켓이 없습니다."}
               </strong>
            </Infos>
            <Notice>
               입장시 티켓 확인이 필요합니다. 인증 절차 중<br /> 확인이 불가할
               경우 입장이 제한될 수 있습니다.
            </Notice>
         </InfoContainer>
         <ButtonContainer>
            <QrButton onClick={openTicket}>
               <MotionQrBase />
               <MotionQrBar
                  transition={{
                     repeat: Infinity,
                     repeatType: "loop",
                     duration: 3,
                     ease: "easeInOut",
                     repeatDelay: 1,
                  }}
                  animate={{
                     top: ["50%", "60%", "40%", "50%"],
                  }}
               />
            </QrButton>
            <span>탭하여 티켓 확인</span>
         </ButtonContainer>
      </Container>
   );
}

export default TicketTile;
