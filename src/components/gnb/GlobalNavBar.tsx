import { useEffect, useState } from "react";
import GlobalNavBarComponents from "./GlobalNavBar.styled";
import { Overlay } from "components/Overlay.styled";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "hooks/UseLogin";
import { NavItems } from "./NavItems";

export interface NavHeader {
   path: string;
   title: string;
   empTitle?: string;
   subTitle: string;
}

const NAV_HEADER: NavHeader[] = [
   {
      path: "/",
      title: "DANFESTA",
      empTitle: "THE BLUE",
      subTitle: "2023 단국대학교 대동제 '파랑'",
   },
   {
      path: "/ticket",
      title: "모바일 티켓",
      subTitle: "모바일 티켓입니다.",
   },
   {
      path: "/admin",
      title: "관리자 페이지",
      subTitle: "담총 화이팅",
   },
];

function GlobalNavBar() {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [isHome, setIsHome] = useState(false);
   const [navHeader, setNavHeader] = useState<NavHeader>(NAV_HEADER[0]);
   const { authenicate, isLogin, isAdmin, setLogout } = useLogin();
   const location = useLocation();

   const closeDrawer = () => {
      setIsDrawerOpen(false);
   };

   useEffect(() => {
      setIsHome(location.pathname === "/");
      setNavHeader(
         NAV_HEADER.find((header) => header.path === location.pathname) ??
            NAV_HEADER[0]
      );
   }, [location]);

   return (
      <GlobalNavBarComponents.Container home={isHome}>
         <GlobalNavBarComponents.TitleContainer>
            <GlobalNavBarComponents.Title>
               {navHeader.title} <em>{navHeader.empTitle}</em>
            </GlobalNavBarComponents.Title>
            <GlobalNavBarComponents.SubTitle>
               {navHeader.subTitle}
            </GlobalNavBarComponents.SubTitle>
         </GlobalNavBarComponents.TitleContainer>

         <GlobalNavBarComponents.HamburgerButton
            onClick={() => setIsDrawerOpen(true)}
         />
         <AnimatePresence>
            {isDrawerOpen && (
               <>
                  <Overlay onClick={closeDrawer} />
                  <GlobalNavBarComponents.DrawerContainer>
                     <GlobalNavBarComponents.UserMenuContainer>
                        <GlobalNavBarComponents.CloseButton
                           onClick={closeDrawer}
                        />
                        <GlobalNavBarComponents.UserMenu>
                           <Link to="ticket">모바일 티켓</Link>
                           {isLogin() ? (
                              <button
                                 onClick={() => {
                                    setLogout();
                                    window.location.reload();
                                 }}
                              >
                                 로그아웃
                              </button>
                           ) : (
                              <button
                                 onClick={() => {
                                    closeDrawer();
                                    authenicate();
                                 }}
                              >
                                 로그인
                              </button>
                           )}
                        </GlobalNavBarComponents.UserMenu>
                     </GlobalNavBarComponents.UserMenuContainer>
                     <GlobalNavBarComponents.NavItem>
                        {NavItems.map(({ name, id, path }) => (
                           <GlobalNavBarComponents.NavItemLi key={id}>
                              <Link to={path} onClick={closeDrawer}>
                                 {name}
                              </Link>
                           </GlobalNavBarComponents.NavItemLi>
                        ))}
                        {isAdmin() && (
                           <GlobalNavBarComponents.NavItemLi>
                              <Link to="/admin" onClick={closeDrawer}>
                                 관리자 페이지
                              </Link>
                           </GlobalNavBarComponents.NavItemLi>
                        )}
                     </GlobalNavBarComponents.NavItem>
                  </GlobalNavBarComponents.DrawerContainer>
               </>
            )}
         </AnimatePresence>
      </GlobalNavBarComponents.Container>
   );
}

export default GlobalNavBar;
