import { useEffect, useState } from "react";
import GNB from "./GlobalNavBar.styled";
import { Overlay } from "components/Overlay.styled";
import { AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "hooks/UseLogin";
import { NavItems } from "./NavItems";
import { NAV_HEADER, NavHeader } from "./NavHeader";
import { useTicket } from "hooks/UseTicket";

function GlobalNavBar() {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   const [isHome, setIsHome] = useState(false);
   const [navHeader, setNavHeader] = useState<NavHeader>(NAV_HEADER[0]);
   const { authenicate, isLogin, isAdmin, setLogout } = useLogin();
   const location = useLocation();
   const navigate = useNavigate();
   const [isTop, setIsTop] = useState(true);
   const { getTicketInfo } = useTicket();

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

   const checkTicketId = () => {
      const currentDate = new Date().getDate();
      const info = getTicketInfo();

      if (currentDate === new Date(2023, 4, 17).getDate() && info) {
         alert(`티켓 번호: ${info[0].id}`);
      } else if (currentDate === new Date(2023, 4, 18).getDate() && info) {
         alert(`티켓 번호: ${info[1].id}`);
      } else {
         alert("티켓이 없습니다.");
      }
   };

   return (
      <GNB.Container home={isHome} top={isTop}>
         <GNB.TitleContainer
            onClick={() => {
               navHeader.title === "관리자 페이지"
                  ? navigate("chan-jin")
                  : navigate("/");
            }}
         >
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
                        <GNB.NavItemLi onClick={checkTicketId}>
                           <div
                              style={{
                                 cursor: "pointer",
                                 display: "flex",
                                 justifyContent: "right",
                              }}
                           >
                              티켓 번호
                           </div>
                        </GNB.NavItemLi>
                     </GNB.NavItem>
                  </GNB.DrawerContainer>
               </>
            )}
         </AnimatePresence>
      </GNB.Container>
   );
}

export default GlobalNavBar;
