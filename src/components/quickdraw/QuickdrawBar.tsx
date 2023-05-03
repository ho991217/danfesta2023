import { useState } from "react";
import QuickdrawBarComponent from "./QuickdrawBar.styled";
import { useTicket } from "hooks/UseTicket";
import { AnimatePresence } from "framer-motion";

function QuickdrawBar() {
   const [hasTicket, setHasTicket] = useState(true);

   const { openTicket, isTicketOpen } = useTicket();

   return (
      <QuickdrawBarComponent.Container
         onClick={() => {
            openTicket();
         }}
      >
         <AnimatePresence>
            {hasTicket && !isTicketOpen() && <QuickdrawBarComponent.Ticket />}
         </AnimatePresence>
         <QuickdrawBarComponent.WhiteBlock />
         <QuickdrawBarComponent.InsetBg>
            <span>탭하여 모바일 티켓 확인</span>
         </QuickdrawBarComponent.InsetBg>
         <QuickdrawBarComponent.WhiteBlock />
      </QuickdrawBarComponent.Container>
   );
}

export default QuickdrawBar;
