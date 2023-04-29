import { atom } from "recoil";

export const TicketAtom = atom({
   key: "ticket",
   default: {
      id: 0,
      qrCode: "",
      valid: false,
      isOpen: false,
      distributed: false,
   },
});
