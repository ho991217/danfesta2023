import styled from "styled-components";

const Container = styled.footer`
   background-color: #fff;
   width: 100%;
   height: 650px;
   left: 0;
   border-radius: 20px 20px 0 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding: 40px 0;
`;

const Title = styled.h6`
   font-size: 20px;
   font-weight: 700;
   b {
      font-weight: 700;
      color: ${({ theme }) => theme.color.primary};
   }
   margin-bottom: 45px;
`;

const P = styled.p`
   font-size: 10px;
   color: #8d8d8d;
   font-weight: 300;
   b {
      font-weight: 400;
   }
   text-align: center;
   margin-bottom: 20px;
   line-height: 2;
`;

const Ul = styled.ul`
   list-style: none;
   text-align: center;
   line-height: 1.75;
`;

const Li = styled.li`
   a {
      font-size: 10px;
      color: #8d8d8d;
      font-weight: 500;
      text-decoration: none;
   }
`;

const Copyright = styled.span`
   font-size: 10px;
   text-align: center;
   margin: 15px;
`;

const Logo = styled.img`
   margin: 13px 0;
`;

const FooterComponent = {
   Container,
   Title,
   P,
   Ul,
   Li,
   Copyright,
   Logo,
};

export default FooterComponent;
