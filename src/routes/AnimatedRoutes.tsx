import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import LineUpCards from "./line-up/LineUpCards";
import { ARTISTS } from "components/lineup/Artists";
import LineUp from "./line-up/LineUp";
import { IRoutePath } from "./IRoutePath";

const AnimatedRoutes = () => {
   const location = useLocation();

   return (
      <AnimatePresence mode="wait" initial={false}>
         <Routes location={location} key={location.pathname}>
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
         </Routes>
      </AnimatePresence>
   );
};

export default AnimatedRoutes;
