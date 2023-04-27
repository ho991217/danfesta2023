import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Router from "./routes/Router";
import Modal from "./components/modal/Modal";

function App() {
   return (
      <RecoilRoot>
         <GlobalStyles />
         <Router />
         
      </RecoilRoot>
   );
}

export default App;
