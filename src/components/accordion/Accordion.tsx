import { useState } from "react";
import AccordionComponent from "./Accordion.styled";
import { AnimatePresence } from "framer-motion";

interface AccordionProps {
   title: string;
   children: React.ReactNode | string;
}

function Accordion({ title, children }: AccordionProps) {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <AccordionComponent.Container
         open={isOpen}
         onClick={() => {
            setIsOpen(!isOpen);
         }}
      >
         <AccordionComponent.Title open={isOpen}>
            {title}
            <AccordionComponent.AnimatedChevron open={isOpen} />
         </AccordionComponent.Title>
         <AnimatePresence initial={false}>
            {isOpen && (
               <AccordionComponent.Body
                  open={isOpen}
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                     open: { opacity: 1, height: "auto" },
                     collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
               >
                  <p
                     style={{
                        margin: "89px 20px 24px 20px",
                     }}
                  >
                     {children}
                  </p>
               </AccordionComponent.Body>
            )}
         </AnimatePresence>
      </AccordionComponent.Container>
   );
}

export default Accordion;
