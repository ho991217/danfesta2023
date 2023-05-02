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
import LineUp from "./line-up/LineUp";
import LineUpCards from "./line-up/LineUpCards";
import { ARTISTS } from "components/lineup/Artists";

function Router() {
   const { isAdmin } = useLogin();

   return (
      <BrowserRouter>
         <GlobalNavBar />
         <Routes>
            <Route path={IRoutePath["HOME"]} element={<Home />} />
            <Route path={IRoutePath["TICKET"]} element={<Ticket />} />
            <Route path={IRoutePath["LINEUP"]} element={<LineUp />}>
               <Route path="" element={<Navigate to="1" />} />
               <Route
                  path="1"
                  element={<LineUpCards artist={ARTISTS[0]} dir="ltr" />}
               />
               <Route
                  path="2"
                  element={<LineUpCards artist={ARTISTS[1]} dir="rtl" />}
               />
            </Route>
            <Route
               path={IRoutePath["TICKETING"]}
               element={<div>ticketing</div>}
            />
            <Route path={IRoutePath["EVENTS"]} element={<div>event</div>} />
            <Route path={IRoutePath["LIVEMAP"]} element={<LiveMap />} />
            <Route path={IRoutePath["NOTICE"]} element={<div>notie</div>} />
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

            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
         <Modal />
         <TicketPopup />
      </BrowserRouter>
   );
}

export default Router;
