import { EVENTID } from "eventId";
import artist1src from "../../assets/images/artists/artist_01.png";
import artist2src from "../../assets/images/artists/artist_02.png";
import artist3src from "../../assets/images/artists/artist_03.png";
import artist4src from "../../assets/images/artists/artist_04.png";
import artist5src from "../../assets/images/artists/artist_05.png";
import artist6src from "../../assets/images/artists/artist_06.png";
import artist7src from "../../assets/images/artists/artist_07.png";
import artist8src from "../../assets/images/artists/artist_08.png";
import artist9src from "../../assets/images/artists/artist_09.png";
import artist10src from "../../assets/images/artists/artist_10.png";

export interface Artist {
   id: number;
   name: string;
   image: string;
   eventId: EVENTID;
}

export const ARTISTS: Artist[][] = [
   [
      {
         id: 1,
         name: "아이콘",
         image: artist1src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 2,
         name: "효린",
         image: artist2src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 3,
         name: "비비",
         image: artist3src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 4,
         name: "DPR live",
         image: artist4src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 5,
         name: "라임라잇",
         image: artist5src,
         eventId: EVENTID["1일차"],
      },
   ],
   [
      {
         id: 6,
         name: "공개 예정",
         image: artist6src,
         eventId: EVENTID["2일차"],
      },
      {
         id: 7,
         name: "공개 예정",
         image: artist7src,
         eventId: EVENTID["2일차"],
      },
      {
         id: 8,
         name: "공개 예정",
         image: artist8src,
         eventId: EVENTID["2일차"],
      },
      {
         id: 9,
         name: "공개 예정",
         image: artist9src,
         eventId: EVENTID["2일차"],
      },
      {
         id: 10,
         name: "공개 예정",
         image: artist10src,
         eventId: EVENTID["2일차"],
      },
   ],
];
