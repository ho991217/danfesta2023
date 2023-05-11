import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   width: calc(100% - 40px);
   margin: 0 auto;
`;

const TicketThumbnail = styled.img.attrs({
   initial: { opacity: 0 },
   animate: { opacity: 1 },
   exit: { opacity: 0 },
})`
   width: 100%;
   max-width: 400px;
   height: 140px;
   border-radius: 10px;
   object-fit: cover;
`;

const Body = styled.div`
   width: 100%;
   padding: 20px 17px;
   background-color: ${({ theme }) => theme.color.white};
   margin: 10px 0 100px 0;
   border-radius: 10px;
   h6 {
      font-size: 14px;
      font-weight: 300;
      color: #979797;
      margin-bottom: 10px;
   }
`;

const P = styled.p`
   font-size: 12px;
   letter-spacing: -0.2px;
   color: #23569e;
   line-height: 1.5;
   margin-bottom: 20px;
`;

const Terms = styled.div`
   width: 100%;
   height: 120px;
   background-color: #efefef;
   border-radius: 10px;
   overflow: scroll;
   padding: 20px;
   font-size: 12px;
   color: #23569e;
`;

const AgreeContainer = styled.label`
   font-size: 12px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   font-weight: 300;
   margin: 20px 0 17px 0;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })``;

const CaptchaContainer = styled.div`
   width: 100%;
   height: 95px;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 10px;
   > * {
      border-radius: 5px;
   }
`;

const Captcha = styled.img`
   aspect-ratio: 200/90;
   height: 100%;
   border: 1px solid #c9c9c9;
`;

const Refetch = styled.button`
   border: none;
   font-size: 14px;
   height: 100%;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-end;
   background-color: #efefef;
   padding: 5px;
   span {
      background-color: #fff;
      width: 100%;
      padding: 8px 0 5px 0;
      margin-top: 20px;
      border-radius: 5px;
   }
`;

const TicketingComponent = {
   Container,
   TicketThumbnail,
   Body,
   P,
   Terms,
   AgreeContainer,
   Checkbox,
   CaptchaContainer,
   Captcha,
   Refetch,
};

export default TicketingComponent;
