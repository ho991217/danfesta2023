import { EVENTID } from "eventId";
import { ARTISTS } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { Link } from "react-router-dom";
import { IRoutePath } from "routes/IRoutePath";
import styled from "styled-components";

const Container = styled(Link)`
   grid-area: a;
   border-radius: 10px;
   text-decoration: none;
   background-color: ${({ theme }) => theme.color.black};
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

function LineUpTile() {
   return (
      <Container to={IRoutePath["LINEUP"]}>
         <Card
            id={ARTISTS[0][0].id}
            eventId={EVENTID["1일차"]}
            name={ARTISTS[0][0].name}
            image={ARTISTS[0][0].image}
         />
      </Container>
   );
}

export default LineUpTile;
