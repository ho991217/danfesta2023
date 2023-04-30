import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";
import Admin from "./admin/Admin";
import { useLogin } from "hooks/UseLogin";
import Ticket from "./ticket/Ticket";
import TicketPopup from "components/ticket/TicketPopup";
import GlobalNavBar from "components/gnb/GlobalNavBar";

function Router() {
   const { isAdmin } = useLogin();

   return (
      <BrowserRouter>
         <GlobalNavBar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route
               path="/admin"
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
