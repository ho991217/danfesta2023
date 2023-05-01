import { useEffect, useState } from "react";
import GNB from "./GlobalNavBar.styled";
import { Overlay } from "components/Overlay.styled";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "hooks/UseLogin";
import { NavItems } from "./NavItems";
import { IRoutePath } from "routes/IRoutePath";

export interface NavHeader {
   path: string;
   title: string;
   empTitle?: string;
   subTitle: string;
}

const NAV_HEADER: NavHeader[] = [
   {
      path: IRoutePath["HOME"],
      title: "DANFESTA",
      empTitle: "'THE BLUE'",
      subTitle: "2023 단국대학교 대동제 '파랑'",
   },
   {
      path: IRoutePath["TICKET"],
      title: "모바일 티켓",
      subTitle: "모바일 티켓입니다.",
   },
   {
      path: IRoutePath["LIVEMAP"],
      title: "BOOTH MAP",
      subTitle: "2023 단페스타 라이브맵"
   },
   {
      path: IRoutePath["ADMIN"],
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
   const [isTop, setIsTop] = useState(true);

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

   useEffect(() => {
      const onScroll = () => {
         setIsTop(window.scrollY === 0);
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   useEffect(() => {
      if (isDrawerOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   }, [isDrawerOpen]);

   return (
      <GNB.Container home={isHome} top={isTop}>
         <GNB.TitleContainer>
            <GNB.Title>
               {navHeader.title} <em>{navHeader.empTitle}</em>
            </GNB.Title>
            <GNB.SubTitle>{navHeader.subTitle}</GNB.SubTitle>
         </GNB.TitleContainer>

         <GNB.HamburgerButton onClick={() => setIsDrawerOpen(true)} />
         <AnimatePresence>
            {isDrawerOpen && (
               <>
                  <Overlay onClick={closeDrawer} />
                  <GNB.DrawerContainer>
                     <GNB.UserMenuContainer>
                        <GNB.CloseButton onClick={closeDrawer} />
                        <GNB.UserMenu>
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
                        </GNB.UserMenu>
                     </GNB.UserMenuContainer>
                     <GNB.NavItem>
                        {NavItems.map(({ name, id, path }) => (
                           <GNB.NavItemLi key={id}>
                              <Link to={path} onClick={closeDrawer}>
                                 {name}
                              </Link>
                           </GNB.NavItemLi>
                        ))}
                        {isAdmin() && (
                           <GNB.NavItemLi>
                              <Link to="/admin" onClick={closeDrawer}>
                                 관리자 페이지
                              </Link>
                           </GNB.NavItemLi>
                        )}
                     </GNB.NavItem>
                  </GNB.DrawerContainer>
               </>
            )}
         </AnimatePresence>
      </GNB.Container>
   );
}

export default GlobalNavBar;
