import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   gap: 15px;
   padding-top: 10px;
   width: calc(100% - 40px);
   margin: 10px auto 100px auto;
`;

const TicketIdContainer = styled.form`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 10px;
   width: 100%;
   height: 40px;
`;

const TicketIdInput = styled.input`
   flex-grow: 1;
   height: 100%;
   padding: 0 10px;
   border: 1px solid ${({ theme }) => theme.color.gray200};
   border-radius: 5px;
`;

const TicketIdSubmitButton = styled.button`
   height: 100%;
   padding: 0 25px;
   font-size: 20px;
   font-weight: 600;
   color: ${({ theme }) => theme.color.white};
   background-color: ${({ theme }) => theme.color.primary};
   border-radius: 5px;
   border: none;
`;

const QrReaderContainer = styled.div`
   aspect-ratio: 1/1;
   width: 100%;
   position: relative;
   background-color: ${({ theme }) => theme.color.gray200};
   overflow: hidden;
   border-radius: 10px;

   video {
      scale: 1.35;
   }
`;

const TicketInfoContainer = styled.div``;

const AdminComponents = {
   Container,
   TicketIdContainer,
   TicketIdInput,
   TicketIdSubmitButton,
   QrReaderContainer,
   TicketInfoContainer,
};

export default AdminComponents;
