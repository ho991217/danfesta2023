import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Router from "./routes/Router";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import { useModal } from "hooks/UseModal";

function App() {
   const { openModal, closeModal } = useModal();

   useEffect(() => {
      const visited = sessionStorage.getItem("visited");
      if (!visited && window.screen.width > 450) {
         openModal({
            title: "안내",
            body: "Danfesta 앱은 모바일 환경에 최적화되어 있습니다. 모바일 환경에서 이용해주세요.",
            onAccept: () => {
               sessionStorage.setItem("visited", "true");
               closeModal();
            },
            acceptText: "닫기",
            declineText: "",
         });
      }
   }, []);

   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <Router />
      </ThemeProvider>
   );
}

export default App;
