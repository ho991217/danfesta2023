import styled from "styled-components";
import QuickDrawBg from "assets/images/ticket_quickdraw.svg";
import { motion } from "framer-motion";

const Container = styled.div`
   position: fixed;
   bottom: -10px;
   left: 0;
   width: 100vw;
   height: 90px;
   display: flex;
   justify-content: center;
   align-items: center;
   filter: drop-shadow(0px -5px 4px rgba(0, 0, 0, 0.1));
   z-index: 99;
`;

const WhiteBlock = styled.div`
   flex-grow: 1;
   height: 100%;
   background-color: ${({ theme }) => theme.color.white};
   z-index: 99;
`;

const InsetBg = styled.div`
   width: 400px;
   height: 100%;
   background-image: url(${QuickDrawBg});
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   z-index: 99;
   span {
      font-size: 0.9rem;
      margin-top: 3em;
      color: ${({ theme }) => theme.color.gray300};
      font-weight: 300;
   }
`;

const Ticket = styled(motion.div).attrs({
   initial: { y: 100, opacity: 0 },
   animate: { y: 0, opacity: 1 },
   exit: { y: 100, opacity: 0 },
   transition: { duration: 0.5, ease: "easeInOut" },
})`
   width: 100%;
   height: 85%;
   background-color: ${({ theme }) => theme.color.primary};
   position: absolute;
   bottom: 0;
   left: 0;
   z-index: 98;
`;

const QuickdrawBarComponent = {
   Container,
   WhiteBlock,
   InsetBg,
   Ticket,
};

export default QuickdrawBarComponent;
