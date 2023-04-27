export interface Modal {
   isOpen: boolean;
   title: string;
   body: React.ReactElement | string | null;
   declineText?: string;
   acceptText?: string;
   onAccept?: () => void;
}
