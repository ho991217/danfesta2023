import styled from "styled-components";

const Container = styled.div`
   grid-area: a;
   width: 100%;
   aspect-ratio: 1/1;
   background-color: white;
   border-radius: 10px;
   box-shadow: 0px 25px 50px 5px rgba(0, 0, 0, 0.2);
`;

function LineUpTile() {
   return <Container></Container>;
}

export default LineUpTile;
