import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
   width: calc(100vw - 40px);
   height: 40px;
   background-color: ${({ theme }) => theme.color.white};
   border-radius: 10px;
   margin: 1rem auto;
   display: flex;
`;

const TabLabel = styled.div<{ selected: boolean }>`
   width: 50%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   span {
      z-index: 2;
      font-size: 0.9rem;
      font-weight: 400;
      color: ${({ theme, selected }) =>
         selected ? theme.color.white : theme.color.black};
      transition: color 0.3s ease-in-out;
   }
`;

const TabHighlight = styled(motion.div)`
   width: calc(100% - 10px);
   height: calc(100% - 10px);
   border-radius: 7px;
   background-color: ${({ theme }) => theme.color.primary};
   z-index: 0;
   position: absolute;
`;

const TabComponents = {
   Container,
   TabLabel,
   TabHighlight,
};

export default TabComponents;
