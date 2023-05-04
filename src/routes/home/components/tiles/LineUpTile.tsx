import { EVENTID } from "eventId";
import { ARTISTS } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { Link } from "react-router-dom";
import { IRoutePath } from "routes/IRoutePath";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled(Link)`
   grid-area: a;
   border-radius: 10px;
   text-decoration: none;
   background-color: ${({ theme }) => theme.color.black};
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

function LineUpTile() {
   const [currentLineUp, setCurrentLineUp] = useState(0);

   useEffect(() => {
      const id = setInterval(() => {
         setCurrentLineUp((prev) => (prev + 1) % ARTISTS.flat().length);
      }, 3000);
      return () => {
         clearInterval(id);
      };
   }, []);

   return (
      <Container to={IRoutePath["LINEUP"]}>
         <Card {...ARTISTS.flat()[currentLineUp]} />
      </Container>
   );
}

export default LineUpTile;
