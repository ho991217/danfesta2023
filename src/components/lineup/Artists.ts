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

export interface Artist {
   id: number;
   name: string;
   image: string;
   eventId: EVENTID;
}

interface Lineup {
   [index: number]: Artist[];
}

export const ARTISTS: Artist[][] = [
   [
      {
         id: 1,
         name: "공개 예정",
         image: artist1src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 2,
         name: "공개 예정",
         image: artist2src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 3,
         name: "공개 예정",
         image: artist3src,
         eventId: EVENTID["1일차"],
      },
      {
         id: 4,
         name: "공개 예정",
         image: artist4src,
         eventId: EVENTID["1일차"],
      },
   ],
   [
      {
         id: 5,
         name: "공개 예정",
         image: artist5src,
         eventId: EVENTID["2일차"],
      },
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
   ],
];
