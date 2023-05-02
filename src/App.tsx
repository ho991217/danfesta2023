import { useSetRecoilState } from "recoil";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import Router from "./routes/Router";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { useLogin } from "hooks/UseLogin";
import { useEffect } from "react";
import { LoginInUserAtom } from "recoil/atoms/LoginUserAtom";

function App() {
   const setUser = useSetRecoilState(LoginInUserAtom);
   const { getAccessToken, getUserInfo } = useLogin();

   useEffect(() => {
      const accessToken = getAccessToken();

      if (accessToken) {
         getUserInfo().then((user) => {
            setUser(user);
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
