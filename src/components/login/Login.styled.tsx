import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Header = styled.div`
   font-size: 16px;
   margin-bottom: 22px;
`;

const Body = styled.form`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

const ErrorMsg = styled.span`
   font-size: 12px;
   margin-top: 4px;
   color: ${({ theme }) => theme.color.red};
`;

const LoginComponents = {
   Container,
   Header,
   Body,
   ErrorMsg,
};

export default LoginComponents;
