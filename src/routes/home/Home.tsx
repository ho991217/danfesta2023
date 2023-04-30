import { useLogin } from "hooks/UseLogin";
import { useRecoilValue } from "recoil";
import HomeComponents from "./components/Home.styled";
import TicketTile from "./components/tiles/TicketTile";
import LineUpTile from "./components/tiles/LineUpTile";
import SmallTile, { SmallTileProps } from "./components/tiles/SmallTile";
import AnimatedIcons from "./components/tiles/SmallTileIcons.styled";
import HomeBg from "./components/HomeBg";
import { ModalAtom } from "recoil/atoms/ModalAtom";
import { TicketAtom } from "recoil/atoms/TicketAtom";
import { useEffect, useState } from "react";

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
   const { authenicate, setLogout } = useLogin();

   return (
      <HomeComponents.Container>
         <HomeBg />
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
