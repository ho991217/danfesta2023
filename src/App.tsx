import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Router from "./routes/Router";

function App() {
   return (
      <RecoilRoot>
         <GlobalStyles />
         <Router />
      </RecoilRoot>
   );
}

export default App;
