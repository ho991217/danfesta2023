import styled from "styled-components";

const Container = styled.div`
   display: flex;
   flex-direction: column;
`;

const Header = styled.div`
   font-size: 16px;
   margin-bottom: 27px;
`;

const Body = styled.form`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

const LoginComponents = {
   Container,
   Header,
   Body,
};

export default LoginComponents;
