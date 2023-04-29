import { useLogin } from "hooks/UseLogin";
import { useRecoilValue } from "recoil";
import { LoginInUserAtom } from "recoil/atoms/LoginUserAtom";
import HomeComponents from "./components/Home.styled";
import TicketTile from "./components/tiles/TicketTile";
import LineUpTile from "./components/tiles/LineUpTile";

import { ReactComponent as TicketIcon } from "assets/icons/ticket.svg";
import { ReactComponent as EventIcon } from "assets/icons/star.svg";
import { ReactComponent as LiveMapIcon } from "assets/icons/location.svg";
import { ReactComponent as NoticeIcon } from "assets/icons/megaphone.svg";
import SmallTile from "./components/tiles/SmallTile";

export interface SmallTileType {
   id: string;
   subTitle: string;
   title: string;
   icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
   link: string;
   bgColor: string;
}

const SMALL_TILES: SmallTileType[] = [
   {
      id: "b",
      subTitle: "ticketing",
      title: "단국존/사전 티켓팅",
      icon: TicketIcon,
      link: "/ticketing",
      bgColor: "#006AFF",
   },
   {
      id: "c",
      subTitle: "events",
      title: "이벤트/확인하기",
      icon: EventIcon,
      link: "/events",
      bgColor: "#fff",
   },
   {
      id: "d",
      subTitle: "live-map",
      title: "부스별 위치/라이브 맵",
      icon: LiveMapIcon,
      link: "/live-map",
      bgColor: "#fff",
   },
   {
      id: "e",
      subTitle: "notice",
      title: "축제관련/공지 및 알림",
      icon: NoticeIcon,
      link: "/notice",
      bgColor: "#3d3d3d",
   },
];

function Home() {
   const user = useRecoilValue(LoginInUserAtom);

   const { authenicate, setLogout } = useLogin();

   return (
      <HomeComponents.Container>
         <HomeComponents.HomeBg />
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
