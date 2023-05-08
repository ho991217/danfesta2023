import { useSetRecoilState } from "recoil";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Router from "./routes/Router";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { useLogin } from "hooks/UseLogin";
import { useEffect } from "react";
import { LoginInUserAtom } from "recoil/atoms/LoginUserAtom";
import { useModal } from "hooks/UseModal";

function App() {
   const setUser = useSetRecoilState(LoginInUserAtom);
   const { getAccessToken, getUserInfo } = useLogin();
   const { openModal, closeModal } = useModal();

   useEffect(() => {
      const accessToken = getAccessToken();

      if (accessToken) {
         getUserInfo().then((user) => {
            setUser(user);
         });
      }
   }, []);

   useEffect(() => {
      const visited = localStorage.getItem("visited");
      if (!visited && window.screen.width > 450) {
         localStorage.setItem("visited", "true");
         openModal({
            title: "안내",
            body: "Danfesta 앱은 모바일 환경에 최적화되어 있습니다. 모바일 환경에서 이용해주세요.",
            onAccept: () => {
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
