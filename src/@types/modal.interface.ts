export interface Modal {
   isOpen: boolean;
   title: string;
   dontCloseOnEsc?: boolean;
   body: React.ReactElement | string | null;
   declineText?: string;
   acceptText?: string;
   onAccept?: () => void;
   onDecline?: () => void;
}
