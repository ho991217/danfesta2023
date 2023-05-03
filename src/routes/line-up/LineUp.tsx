import Tab from "components/tab/Tab";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function LineUp() {
   const [day, setDay] = useState("1");
   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      setDay(location.pathname.at(-1) ?? "1");
   }, [location.pathname]);

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "calc(100% - 40px)",
            margin: "0 auto 100px auto",
         }}
      >
         <Tab
            labels={["1일차", "2일차"]}
            selectedLabel={`${day}일차`}
            onLabelClick={(label) => {
               if (label === "1일차") {
                  navigate("/line-up/1");
               } else {
                  navigate("/line-up/2");
               }
            }}
         />

         <Outlet />
      </div>
   );
}

export default LineUp;
