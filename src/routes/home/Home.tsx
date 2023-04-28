import { useLogin } from "hooks/UseLogin";

function Home() {
   const { authenicate } = useLogin();
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
      </div>
   );
}

export default Home;
