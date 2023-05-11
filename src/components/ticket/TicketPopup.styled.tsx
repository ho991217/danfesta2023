import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as TicketBGUp } from "assets/images/ticket_bg_upper.svg";
import { ReactComponent as TicketBGDown } from "assets/images/ticket_bg_lower.svg";

const Container = styled(motion.div).attrs({
   initial: { translate: "-50% 200%", scale: 0.5 },
   animate: { translate: "-50% 50%", scale: 1 },
   exit: { translate: "-50% 200%", scale: 0.5 },
   transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
   },
})`
   aspect-ratio: 1/2;
   position: fixed;
   bottom: 50%;
   left: 50%;
   width: calc(100% - 80px);
   max-width: 300px;
   z-index: 999;
   border-radius: 5px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Garnish = styled.div<{ pos: "top" | "bottom"; looping?: boolean }>`
   height: 24px;
   width: 100%;
   background-color: ${({ theme }) => theme.color.secondary};
   ${({ pos }) => pos}: 0;
   white-space: nowrap;
   font-size: 10px;
   display: flex;
   align-items: center;
   font-weight: 600;
   color: rgba(255, 255, 255, 0.5);
   gap: 10px;
   p {
      ${({ looping }) =>
         looping &&
         `
      animation: marquee 10s linear infinite;
      @keyframes marquee {
         0% {
            transform: translateX(0);
         }
         100% {
            transform: translateX(-100%);
         }
      }
   `}
   }

   ${({ looping }) => !looping && "justify-content: center;"}
`;

const TicketThumbnail = styled.img`
   width: 100%;
`;

const TicketBody = styled.div`
   position: relative;
   width: 100%;
`;

const TicketBodyBgUpper = styled(TicketBGUp)`
   z-index: 90;
   width: 100%;
   scale: 1.01;
`;
const TicketBodyBgLower = styled(TicketBGDown)`
   z-index: 90;
   width: 100%;
   scale: 1.01;
   translate: 0 4px;
`;

const TicketBodyContent = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding: 26px;
   z-index: 99;
`;

const TicketBodyContentUpper = styled.div`
   position: relative;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const TicketBodyContentLower = styled.div`
   width: 100%;
   position: relative;
`;

const NoticeHeader = styled.h6`
   font-weight: 500;
   width: 100%;
   text-align: left;
   margin-bottom: 5px;
   font-size: 1.1rem;
`;

const NoticeOl = styled.ol`
   width: 100%;
   list-style-position: inside;
   li {
      font-size: 0.6rem;
      color: ${({ theme }) => theme.color.secondary};
      line-height: 1.8;
   }
`;

const TicketMainInfoContainer = styled.ul`
   height: 100%;
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
   min-width: fit-content;
`;

const TicketMainInfo = styled.li`
   h6 {
      font-size: 0.75rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
   }

   span {
      font-size: 1.2rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color.secondary};
   }
`;

const TicketQrCodeContainer = styled.div`
   height: 100%;
   display: flex;
   flex-grow: 1;
   flex-direction: column;
   align-items: center;
   gap: 6px;
   transform: translateX(1.5rem);
   span {
      font-size: 1.3rem;
      font-weight: 600;
   }
   div {
      height: 100%;
      overflow: hidden;
      svg {
         height: 100%;
         width: 100%;
      }
   }
`;

const TicketComponents = {
   Container,
   Garnish,
   TicketThumbnail,
   TicketBody,
   TicketBodyBgUpper,
   TicketBodyBgLower,
   TicketBodyContent,
   TicketBodyContentUpper,
   TicketMainInfoContainer,
   TicketMainInfo,
   TicketQrCodeContainer,
   TicketBodyContentLower,
   NoticeHeader,
   NoticeOl,
};

export default TicketComponents;
