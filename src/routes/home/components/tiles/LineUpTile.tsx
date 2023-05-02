import { EVENTID } from "eventId";
import { ARTISTS } from "components/lineup/Artists";
import Card from "components/lineup/Card";
import { Link } from "react-router-dom";
import { IRoutePath } from "routes/IRoutePath";
import styled from "styled-components";

const Container = styled(Link)`
   grid-area: a;
   border-radius: 10px;
   box-shadow: 0px 25px 50px 5px rgba(0, 0, 0, 0.2);
   text-decoration: none;
   background-color: ${({ theme }) => theme.color.black};
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
