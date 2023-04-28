import { useLogin } from "hooks/UseLogin";
import { useRecoilValue } from "recoil";
import { LoginInUserAtom } from "recoil/atoms/LoginUserAtom";

function Home() {
   const user = useRecoilValue(LoginInUserAtom);

   const { authenicate, setLogout } = useLogin();

   return (
      <div>
         <button
            onClick={() => {
               authenicate(() => {
                  console.log("인증 완");
               });
            }}
         >
            모달
         </button>
         너의 이름은 {user.username}
         <button onClick={setLogout}>로그아웃</button>
      </div>
   );
}

export default Home;
