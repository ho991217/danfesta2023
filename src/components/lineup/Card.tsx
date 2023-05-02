import { EVENTID } from "eventId";
import CardComponents from "./Card.styled";
import { Artist } from "./Artists";
import { AnimatePresence } from "framer-motion";

function Card({
   name: artistName,
   image: artistImage,
   eventId,
   id,
   direction,
}: Artist & { direction?: "rtl" | "ltr" }) {
   return (
      <CardComponents.Container
         initial={{
            translateX: direction === "ltr" ? "-100%" : "100%",
         }}
         animate={{ translateX: 0 }}
         exit={{ translateX: direction === "ltr" ? "-100%" : "100%" }}
         transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
         }}
         key={id}
      >
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
