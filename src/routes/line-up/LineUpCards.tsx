import { Artist } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function LineUpCards({
   artist,
   dir,
}: {
   artist: Artist[];
   dir: "rtl" | "ltr";
}) {
   const navigate = useNavigate();
   const variants: Variants = {
      enter: {
         opacity: 0,
         x: dir === "rtl" ? 300 : -300,
      },
      center: {
         zIndex: 1,
         x: 0,
         opacity: 1,
      },
      exit: {
         zIndex: 0,
         x: dir === "rtl" ? 300 : -300,
         opacity: 0,
      },
   };
   const swipeConfidenceThreshold = 10000;
   const swipePower = (offset: number, velocity: number) => {
      return Math.abs(offset) * velocity;
   };

   return (
      <motion.div
         variants={variants}
         initial="enter"
         animate="center"
         exit="exit"
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
         transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
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
