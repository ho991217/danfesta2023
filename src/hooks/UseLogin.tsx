import { LoginInUserAtom } from "recoil/atoms/LoginUserAtom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useModal } from "./UseModal";
import Login from "components/login/Login";
import { createRef } from "react";

/**
 *
 * @returns {object} user
 * @returns {function} setLogin
 * @returns {function} setAuthHeader
 * @returns {function} setLogout
 * @returns {function} setRefreshToken
 */
export const useLogin = () => {
   const [user, setUser] = useRecoilState(LoginInUserAtom);
   const { openModal } = useModal();
   const formRef = createRef<HTMLFormElement>();

   const openLoginModal = () => {
      openModal({
         title: "총학생회 ID 로그인",
         body: <Login ref={formRef} onSubmit={setLogin} />,
         acceptText: "로그인",
         onAccept: () => {
            formRef.current?.dispatchEvent(
               new Event("submit", { bubbles: true })
            );
         },
         declineText: "회원가입",
         onDecline: () => {
            window.location.href = "https://dkustu.com/sign-up/agreements";
         },
      });
   };

   const authenicate = (onAuthenticated?: () => void) => {
      getUserInfo().then((user) => {
         if (user) {
            setUser(user);
            onAuthenticated?.();
         } else {
            openLoginModal();
         }
      });
   };

   const setAuthHeader = (accessToken: string) => {
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
   };

   const setLogin = async (studentId: string, password: string) => {
      try {
         const { data } = await axios({
            method: "post",
            url: "/user/login",
            data: {
               studentId,
               password,
            },
         });

         const { accessToken, refreshToken } = data;
         localStorage.setItem("access-token", accessToken);
         localStorage.setItem("refresh-token", refreshToken);
         setAuthHeader(accessToken);
         setUser(await getUserInfo());
         window.location.reload();

         return { successful: true, message: "" };
      } catch (e) {
         const { response } = e as any;
         return { successful: false, message: response.data.message[0] };
      }
   };

   const setLogout = () => {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      setUser({
         username: "",
         nickname: "",
         studentId: "",
         major: "",
         department: "",
         admin: false,
      });
   };

   const isLogin = () => {
      return user.studentId.length !== 0;
   };

   const isAdmin = () => {
      return user === null ? false : user.admin;
   };

   // eslint-disable-next-line consistent-return
   const reissueAccessToken = async () => {
      const refreshToken = localStorage.getItem("refresh-token");

      if (!refreshToken) {
         return null;
      }

      const { data } = await axios({
         method: "post",
         url: "/user/reissue",
         headers: {
            Authorization: `Bearer ${refreshToken}`,
         },
         data: {
            refreshToken,
         },
      });

      localStorage.setItem("access-token", data.accessToken);
      setAuthHeader(data.accessToken);
   };

   const getAccessToken = () => {
      const accessToken = localStorage.getItem("access-token");

      if (!accessToken) {
         return null;
      }

      return accessToken;
   };

   const getUserInfo = async () => {
      const accessToken = localStorage.getItem("access-token");

      if (!accessToken) {
         return null;
      }

      try {
         const { data } = await axios({
            method: "get",
            url: "/user",
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         });
         setAuthHeader(accessToken);

         return data;
      } catch (e) {
         console.log(e);
         return null;
      }
   };

   return {
      setLogin,
      setLogout,
      isLogin,
      isAdmin,
      getAccessToken,
      reissueAccessToken,
      getUserInfo,
      authenicate,
   };
};
