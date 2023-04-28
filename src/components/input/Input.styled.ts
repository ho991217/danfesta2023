import styled from "styled-components";

const Container = styled.p`
   display: flex;
   flex-direction: column;
   gap: 3px;
`;

const Input = styled.input`
   width: 100%;
   height: 40px;
   border: 1px solid #c9c9c9;
   border-radius: 10px;
   padding: 0 13px;
   font-size: 14px;

   ::placeholder {
      color: #c9c9c9;
   }
   :focus {
      outline: 1px solid ${({ theme }) => theme.color.primary};
   }
`;

const Label = styled.label`
   font-size: 13px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

const ErrorMsg = styled.span``;

const InputComponent = {
   Container,
   Input,
   Label,
   ErrorMsg,
};

export default InputComponent;
