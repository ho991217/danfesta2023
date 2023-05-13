import HomeComponents from "./components/Home.styled";
import TicketTile from "./components/tiles/TicketTile";
import LineUpTile from "./components/tiles/LineUpTile";
import SmallTile, { SmallTileProps } from "./components/tiles/SmallTile";
import AnimatedIcons from "./components/tiles/SmallTileIcons.styled";
import HomeBg from "./components/HomeBg";
import { useEffect, useState } from "react";
import { EVENTID } from "eventId";
import { useTicket } from "hooks/UseTicket";
import styled from "styled-components";
import { ReactComponent as Close } from "assets/icons/cross_white.svg";

const TurnTile = styled.div`
   background-color: ${({ theme }) => theme.color.red};
   color: ${({ theme }) => theme.color.white};
   font-size: 11px;
   padding: 7px 15px 7px 10px;
   border-radius: 5px;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   span {
      font-size: 6px;
      font-weight: 300;
      color: ${({ theme }) => theme.color.gray100};
   }
   svg {
      width: 10px;
   }
`;

const SMALL_TILES: SmallTileProps[] = [
   {
      id: "b",
      subTitle: "ticketing",
      title: "단국존/사전 티켓팅",
      Icon: AnimatedIcons.Ticket,
      link: "/ticketing",
      bgColor: "#006AFF",
      textColor: "#fff",
   },
   {
      id: "c",
      subTitle: "events",
      title: "이벤트/확인하기",
      Icon: AnimatedIcons.Event,
      link: "/events",
      bgColor: "#fff",
   },
   {
      id: "d",
      subTitle: "live-map",
      title: "부스별 위치/라이브 맵",
      Icon: AnimatedIcons.LiveMap,
      link: "/live-map",
      bgColor: "#fff",
   },
   {
      id: "e",
      subTitle: "notice",
      title: "축제관련/공지 및 알림",
      Icon: AnimatedIcons.Notice,
      link: "/notice",
      bgColor: "#3d3d3d",
      textColor: "#fff",
   },
];

function Home() {
   const { getTicketTurn } = useTicket();
   const [turn, setTurn] = useState([-1, -1]);
   const [isTurnClosed, setIsTurnClosed] = useState([false, false]);

   useEffect(() => {
      getTicketTurn(EVENTID["1일차"]).then((turn) => {
         setTurn((prev) => [turn, prev[1]]);
      });

      getTicketTurn(EVENTID["2일차"]).then((turn) => {
         setTurn((prev) => [prev[0], turn]);
      });
   }, []);

   useEffect(() => {
      const turnClose_1 = localStorage.getItem("turnClosed_1");
      const turnClose_2 = localStorage.getItem("turnClosed_2");
      if (turnClose_1) {
         setIsTurnClosed((prev) => [true, prev[1]]);
      }
      if (turnClose_2) {
         setIsTurnClosed((prev) => [prev[0], true]);
      }
   }, []);

   return (
      <HomeComponents.Container>
         <HomeBg />
         {turn[0] !== -1 && !isTurnClosed[0] && (
            <TurnTile>
               <p>
                  1일차 티켓 예매번호: {turn[0]}
                  <br />
                  <span>예매번호는 입장 순서와 무관합니다.</span>
               </p>
               <Close
                  onClick={() => {
                     localStorage.setItem("turnClosed_1", "true");
                     setIsTurnClosed((prev) => [true, prev[1]]);
                  }}
               />
            </TurnTile>
         )}
         {turn[1] !== -1 && !isTurnClosed[1] && (
            <TurnTile>
               <p>
                  2일차 티켓 예매번호: {turn[1]}
                  <br />
                  <span>예매번호는 입장 순서와 무관합니다.</span>
               </p>
               <Close
                  onClick={() => {
                     localStorage.setItem("turnClosed_2", "true");
                     setIsTurnClosed((prev) => [prev[0], true]);
                  }}
               />
            </TurnTile>
         )}
         <TicketTile />
         <HomeComponents.TilesGrid>
            <LineUpTile />
            {SMALL_TILES.map((tile) => (
               <SmallTile key={tile.id} {...tile} />
            ))}
         </HomeComponents.TilesGrid>
      </HomeComponents.Container>
   );
}

export default Home;
