import styled from "styled-components";
import { ReactComponent as Chevron } from "assets/icons/chevron.svg";
import { motion } from "framer-motion";

const Container = styled.div<{ open: boolean }>`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-radius: 10px;
   position: relative;
   min-height: 65px;
`;

const Title = styled.div<{ open: boolean }>`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   height: 65px;
   padding: 24px 17px;
   z-index: 2;
   background-color: ${({ open, theme }) =>
      open ? theme.color.primary : "#e4e4e4"};
   color: ${({ open, theme }) => (open ? theme.color.white : "#000")};
   transition: all 0.3s ease-in-out;
   border-radius: 10px;
   cursor: pointer;
   position: absolute;
   top: 0;
   left: 0;
   font-weight: 500;
`;

const AnimatedChevron = styled(Chevron)<{ open: boolean }>`
   ${({ open }) =>
      open
         ? `
         transform: rotateX(180deg);
         fill: #fff`
         : `  
         transform: rotateX(0deg);
         fill: #3e3e3e`};
   transition: all 0.3s ease-in-out;
`;

const Body = styled(motion.div)<{ open: boolean }>`
   min-height: 65px;
   width: 100%;
   top: 0;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   z-index: -1;
   background-color: #fff;
   border-radius: 10px;
   left: 0;
   border: 1px solid ${({ theme }) => theme.color.primary};
   overflow: hidden;
`;

const AccordionComponent = {
   Container,
   AnimatedChevron,
   Body,
   Title,
};

export default AccordionComponent;
