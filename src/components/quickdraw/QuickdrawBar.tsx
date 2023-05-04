import QuickdrawBarComponent from "./QuickdrawBar.styled";
import { useTicket } from "hooks/UseTicket";
import { AnimatePresence } from "framer-motion";

function QuickdrawBar() {
   const { hasTicket } = useTicket();

   const { openTicket, isTicketOpen } = useTicket();

   return (
      <QuickdrawBarComponent.Container onClick={openTicket}>
         <AnimatePresence>
            {hasTicket() && !isTicketOpen() && <QuickdrawBarComponent.Ticket />}
         </AnimatePresence>
         <QuickdrawBarComponent.WhiteBlock />
         <QuickdrawBarComponent.InsetBg>
            <span>
               {hasTicket() ? "탭하여 모바일 티켓 확인" : "티켓이 없습니다."}
            </span>
         </QuickdrawBarComponent.InsetBg>
         <QuickdrawBarComponent.WhiteBlock />
      </QuickdrawBarComponent.Container>
   );
}

export default QuickdrawBar;
