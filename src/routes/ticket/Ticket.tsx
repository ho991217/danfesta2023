import { useTicket } from "hooks/UseTicket";

function Ticket() {
   const { openTicket } = useTicket();
   return (
      <div>
         <button onClick={openTicket}>티켓 열기</button>
      </div>
   );
}

export default Ticket;
