import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as CrossIcon } from "assets/icons/cross.svg";
import { ReactComponent as HamburgerIcon } from "assets/icons/hamburger.svg";

const Container = styled.nav<{ home: boolean }>`
   width: 100%;
   height: 90px;
   margin-bottom: 10px;
   background-color: ${({ theme, home }) =>
      home ? "transparent" : theme.color.white};
   padding: 14px 20px 0 20px;
   display: flex;
   align-items: flex-start;
   justify-content: space-between;

   ${({ home, theme }) =>
      home &&
      `h1 {
         color: ${theme.color.white};
         em {
            font-style: normal;
            color: ${theme.color.primary};
         }
      }
      svg {
         fill: ${theme.color.white};
      }
      `}
`;

const HamburgerButton = styled(HamburgerIcon)``;

const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   gap: 5px;
`;

const Title = styled.h1`
   font-size: 24px;
   font-weight: 600;
   letter-spacing: -2%;
`;

const SubTitle = styled.h2`
   font-size: 14px;
   font-weight: 500;
   color: ${({ theme }) => theme.color.gray300};
`;

const DrawerContainer = styled(motion.nav).attrs({
   initial: { translate: "100% 0" },
   animate: { translate: "0% 0" },
   exit: { translate: "100% 0" },
   transition: {
      type: "spring",
      stiffness: 260,
      damping: 30,
   },
})`
   position: fixed;
   top: 0;
   right: 0;
   z-index: 999;
   height: 100%;
   width: 300px;
   background-color: ${({ theme }) => theme.color.white};
   padding: 14px 20px 0 20px;
   display: flex;
   flex-direction: column;
   font-size: 16px;
   font-weight: 500;
   a {
      text-decoration: none;
      color: inherit;
   }
`;

const CloseButton = styled(CrossIcon)``;

const UserMenuContainer = styled.div`
   height: 60px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 1px solid ${({ theme }) => theme.color.grey100};
`;

const UserMenu = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 20px;
   button {
      all: unset;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
   }
`;

const NavItem = styled.ul`
   list-style: none;
`;

const NavItemLi = styled.li`
   height: 60px;
   width: 100%;
   a {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
   }
`;

const GlobalNavBarComponents = {
   Container,
   HamburgerButton,
   TitleContainer,
   Title,
   SubTitle,
   DrawerContainer,
   CloseButton,
   UserMenuContainer,
   UserMenu,
   NavItem,
   NavItemLi,
};

export default GlobalNavBarComponents;
