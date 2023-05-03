import { EVENTID } from "eventId";
import CardComponents from "./Card.styled";
import { Artist } from "./Artists";

function Card({ name: artistName, image: artistImage, eventId }: Artist) {
   return (
      <CardComponents.Container>
         <CardComponents.TileTitle>artist line-up</CardComponents.TileTitle>
         <CardComponents.LabelContainer>
            <CardComponents.LineUpLabel>
               {eventId === EVENTID["1일차"] ? "17일(1일차)" : "18일(2일차)"}
            </CardComponents.LineUpLabel>
            <CardComponents.ArtistName>{artistName}</CardComponents.ArtistName>
         </CardComponents.LabelContainer>
         <CardComponents.ArtistImage src={artistImage} />
      </CardComponents.Container>
   );
}

export default Card;
