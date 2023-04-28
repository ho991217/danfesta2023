import LoginComponents from "./Login.styled";
import Input from "components/input/Input";
import { FormEvent, forwardRef, useState } from "react";
import { useLogin } from "hooks/UseLogin";
import { useModal } from "hooks/UseModal";

interface LoginProps {
   onSubmit: (
      studentId: string,
      password: string
   ) => Promise<{ successful: boolean; message: any }>;
}

const Login = forwardRef<HTMLFormElement, LoginProps>((props, ref) => {
   const [studentId, setStudentId] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const { setLogin } = useLogin();
   const { closeModal } = useModal();

   const hangdleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLogin(studentId, password).then((res) => {
         if (res.successful) {
            closeModal();
         } else {
            setError(res.message);
         }
      });
   };

   return (
      <LoginComponents.Container>
         <LoginComponents.Header>
            서비스 이용을 위해 로그인이 필요합니다.
         </LoginComponents.Header>
         <LoginComponents.Body onSubmit={hangdleSubmit} ref={ref}>
            <Input
               placeholder="32123456"
               type="number"
               pattern="\d*"
               value={studentId}
               label="아이디"
               onChange={(e) => {
                  setStudentId(e.target.value);
               }}
            />
            <Input
               placeholder="password"
               type="password"
               value={password}
               label="비밀번호"
               onChange={(e) => {
                  setPassword(e.target.value);
               }}
            />
         </LoginComponents.Body>
         <LoginComponents.ErrorMsg>{error}</LoginComponents.ErrorMsg>
      </LoginComponents.Container>
   );
});

export default Login;
