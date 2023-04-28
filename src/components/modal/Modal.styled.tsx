import styled from "styled-components";
import { motion } from "framer-motion";

const Overlay = styled(motion.div).attrs({
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
   transition: {
      type: "ease-in-out",
      stiffness: 260,
      damping: 20,
   },
})`
   position: absolute;
   top: 0;
   left: 0;
   z-index: 998;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled(motion.div).attrs({
   initial: { translateY: "100%" },
   animate: { translateY: 0 },
   exit: { translateY: "100%" },
   transition: {
      type: "ease-in-out",
      stiffness: 260,
      damping: 20,
   },
})`
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
   background-color: #fff;
   border-radius: 20px 20px 0 0;
   z-index: 999;
   padding: 22px 24px 40px 24px;
`;

const Header = styled.header`
   height: 40px;
   font-weight: 600;
   font-size: 22px;
`;

const Body = styled.div``;

const ButtonBox = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 24px;
   gap: 8px;
`;

const ModalComponents = {
   Overlay,
   Container,
   Header,
   Body,
   ButtonBox,
};

export default ModalComponents;
