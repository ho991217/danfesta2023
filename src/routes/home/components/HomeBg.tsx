import styled from "styled-components";
import HomeBgSrc from "assets/images/home_bg.png";

const Background = styled.div`
   aspect-ratio: 1/1;
   width: 100%;
   z-index: -2;
   position: absolute;
   top: 0;
   left: 0;
   border-radius: 0 0 20px 20px;
   background-image: url(${HomeBgSrc});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   overflow: hidden;
`;

function HomeBg() {
   return <Background />;
}

export default HomeBg;
