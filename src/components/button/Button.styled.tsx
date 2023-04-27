import styled from "styled-components";

const Container = styled.button<{
   bgColor: string;
   textColor: string;
}>`
   background-color: ${({ bgColor }) => bgColor};
   color: ${({ textColor }) => textColor};
   width: 100%;
   border: none;
   padding: 12px;
   border-radius: 10px;
`;

const Text = styled.span`
   font-size: 16px;
   font-weight: 700;
`;

const ButtonComponents = {
   Container,
   Text,
};

export default ButtonComponents;
