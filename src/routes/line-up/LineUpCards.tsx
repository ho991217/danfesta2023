import { Artist } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LineUpCards({ artist }: { artist: Artist[] }) {
   const navigate = useNavigate();

   const swipeConfidenceThreshold = 10000;
   const swipePower = (offset: number, velocity: number) => {
      return Math.abs(offset) * velocity;
   };

   return (
      <motion.div
         drag="x"
         dragConstraints={{ left: 0, right: 0 }}
         dragElastic={1}
         onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
               navigate("/line-up/2");
            } else if (swipe > swipeConfidenceThreshold) {
               navigate("/line-up/1");
            }
         }}
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: "11px",
         }}
      >
         {artist.map((artist) => (
            <Card key={artist.id} {...artist} />
         ))}
      </motion.div>
   );
}

export default LineUpCards;
