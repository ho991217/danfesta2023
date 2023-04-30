import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import { RecoilRoot } from "recoil";

axios.defaults.baseURL = "https://dev.dkustu.com/api";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);

root.render(
   <RecoilRoot>
      <App />
   </RecoilRoot>
);
