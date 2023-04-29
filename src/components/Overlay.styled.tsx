import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div).attrs({
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
