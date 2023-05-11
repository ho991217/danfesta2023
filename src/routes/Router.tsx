import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";
import Admin from "./admin/Admin";
import { useLogin } from "hooks/UseLogin";
import Ticket from "./ticket/Ticket";
import TicketPopup from "components/ticket/TicketPopup";
import GlobalNavBar from "components/gnb/GlobalNavBar";
import { IRoutePath } from "./IRoutePath";
import LiveMap from "./live-map/LiveMap";
import QuickdrawBar from "components/quickdraw/QuickdrawBar";
import Notice from "./notice/Notice";
import Ticketing from "./ticketing/Ticketing";
import styled from "styled-components";
import Events from "./events/Events";
import LineUp from "./line-up/LineUp";
import LineUpCards from "./line-up/LineUpCards";
import { ARTISTS } from "components/lineup/Artists";
import Footer from "components/footer/Footer";

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
         <Routes>
            <Route path={IRoutePath["HOME"]} element={<Home />} />
            <Route path={IRoutePath["TICKET"]} element={<Ticket />} />
            <Route path={IRoutePath["TICKETING"]} element={<Ticketing />} />
            <Route path={IRoutePath["EVENTS"]} element={<Events />} />
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
            <Route path={IRoutePath["LINEUP"]} element={<LineUp />}>
               <Route path="" element={<Navigate to="1" />} />
               <Route path="1" element={<LineUpCards artist={ARTISTS[0]} />} />
               <Route path="2" element={<LineUpCards artist={ARTISTS[1]} />} />
            </Route>
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
         <Footer />
      </BrowserRouter>
   );
}

export default Router;
