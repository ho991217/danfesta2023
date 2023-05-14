import { useEffect, useState } from "react";
import GNB from "./GlobalNavBar.styled";
import { Overlay } from "components/Overlay.styled";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useLogin } from "hooks/UseLogin";
import { NavItems } from "./NavItems";
import { NAV_HEADER, NavHeader } from "./NavHeader";

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
                        <GNB.CloseButton onClick={closeDrawer} fill="black" />
                        <GNB.UserMenu>
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
