import { ReactNode } from "react";
import ReactDom from "react-dom";

interface Props {
   children: ReactNode;
}

const TicketPortal = ({ children }: Props) => {
   const el = document.getElementById("ticket-root") as HTMLElement;

   return ReactDom.createPortal(children, el);
};

export default TicketPortal;
