import QRCode from "react-qr-code";
import QrCodeComponents from "./QrCode.styled";

function QrCode({ ticketId }: { ticketId: string }) {
   return (
      <QrCodeComponents.Container>
         <QRCode value={ticketId} />
      </QrCodeComponents.Container>
   );
}

export default QrCode;
