import { atom } from "recoil";

export const TicketAtom = atom({
   key: "ticket",
   default: {
      isOpen: false,
      info: [
         {
            id: 0,
            valid: false,
            distributed: false,
            turn: 0,
         },
         {
            id: 0,
            valid: false,
            distributed: false,
            turn: 0,
         },
      ],
   },
});
