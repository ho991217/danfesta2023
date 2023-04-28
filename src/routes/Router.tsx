import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";
import Admin from "./admin/Admin";
import { useLogin } from "hooks/UseLogin";

function Router() {
   const { isAdmin } = useLogin();

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route
               path="/admin"
               element={isAdmin() ? <Admin /> : <Navigate to="/" />}
            />
            <Route path="*" element={<h1>Not Found</h1>} />
         </Routes>
         <Modal />
      </BrowserRouter>
   );
}

export default Router;
