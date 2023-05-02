import { Artist } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { AnimatePresence } from "framer-motion";

function LineUpCards({
   artist,
   dir,
}: {
   artist: Artist[];
   dir: "rtl" | "ltr";
}) {
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "11px",
         }}
      >
         <AnimatePresence>
            {artist.map((artist) => (
               <Card key="1" {...artist} direction={dir} />
            ))}
         </AnimatePresence>
      </div>
   );
}

export default LineUpCards;
