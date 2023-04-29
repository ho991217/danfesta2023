import styled from "styled-components";

const Container = styled.div`
   grid-area: a;
   width: 100%;
   aspect-ratio: 1/1;
   background-color: white;
   border-radius: 10px;
`;

function LineUpTile() {
   return <Container></Container>;
}

export default LineUpTile;
