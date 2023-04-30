import styled from "styled-components";

const Container = styled.div`
   margin: 20px;
   margin-bottom: 50px;
   width: calc(100%-20px);
`;

const TilesGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(4, 1fr);
   gap: 13px;
   grid-template-areas:
      "a a"
      "a a"
      "b c"
      "d e";
`;

const HomeComponents = {
   Container,
   TilesGrid,
};

export default HomeComponents;
