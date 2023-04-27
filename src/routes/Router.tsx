import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Modal from "../components/modal/Modal";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
         <Modal />
      </BrowserRouter>
   );
}

export default Router;
