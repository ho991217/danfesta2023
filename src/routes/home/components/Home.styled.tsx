import HomeBgSrc from "assets/images/home_bg.png";
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
   div {
      box-shadow: 0px 25px 50px 5px rgba(0, 0, 0, 0.2);
   }
`;

const HomeBg = styled.img.attrs({ src: HomeBgSrc })`
   aspect-ratio: 1/1;
   width: 100%;
   z-index: -1;
   position: absolute;
   top: -50px;
   left: 0;
   border-radius: 0 0 20px 20px;
`;

const HomeComponents = {
   Container,
   HomeBg,
   TilesGrid,
};

export default HomeComponents;
