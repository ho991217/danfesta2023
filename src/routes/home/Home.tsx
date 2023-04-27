import { useModal } from "hooks/UseModal";

function Home() {
   const { openModal } = useModal();
   return (
      <div>
         <button
            onClick={() => openModal({ title: "test", body: <div>test</div> })}
         >
            모달
         </button>
      </div>
   );
}

export default Home;
