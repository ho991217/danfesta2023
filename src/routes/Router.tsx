import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";
import Admin from "./admin/Admin";
import { useLogin } from "hooks/UseLogin";
import Ticket from "./ticket/Ticket";
import TicketPopup from "components/ticket/TicketPopup";
import GlobalNavBar from "components/gnb/GlobalNavBar";
import { IRoutePath } from "./IRoutePath";
import LiveMap from "./live-map/LiveMap";
import AnimatedRoutes from "./AnimatedRoutes";
import QuickdrawBar from "components/quickdraw/QuickdrawBar";
import Notice from "./notice/Notice";
import Ticketing from "./ticketing/Ticketing";
import styled from "styled-components";

const Page = styled.div`
   width: 100%;
   height: calc(100vh - 180px);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   a {
      background-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.white};
      text-decoration: none;
      padding: 7px 15px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 500;
      margin-top: 10px;
   }
`;

function Router() {
   const { isAdmin } = useLogin();

   return (
      <BrowserRouter>
         <GlobalNavBar />
         <QuickdrawBar />
         <AnimatedRoutes />
         <Routes>
            <Route path={IRoutePath["HOME"]} element={<Home />} />
            <Route path={IRoutePath["TICKET"]} element={<Ticket />} />
            <Route
               path={IRoutePath["TICKETING"]}
               element={
                  <Page>
                     추후 공개됩니다.<Link to="/">홈으로 돌아가기</Link>
                  </Page>
               }
            />
            <Route
               path={IRoutePath["EVENTS"]}
               element={
                  <Page>
                     추후 공개됩니다.<Link to="/">홈으로 돌아가기</Link>
                  </Page>
               }
            />
            <Route path={IRoutePath["LIVEMAP"]} element={<LiveMap />} />
            <Route path={IRoutePath["NOTICE"]} element={<Notice />} />
            <Route
               path={IRoutePath["ADMIN"]}
               element={
                  isAdmin() ? (
                     <Admin />
                  ) : (
                     <div>관리자만 접근가능한 페이지입니다.</div>
                  )
               }
            />
            <Route path={IRoutePath["LINEUP"] + "/*"} element={<></>} />
            <Route
               path="*"
               element={
                  <Page>
                     <h1>Not Found</h1>
                  </Page>
               }
            />
         </Routes>
         <Modal />
         <TicketPopup />
      </BrowserRouter>
   );
}

export default Router;
