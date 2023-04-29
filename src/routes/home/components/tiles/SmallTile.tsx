import { SmallTileType } from "routes/home/Home";
import styled from "styled-components";

const Container = styled.div<{ area: string; bg: string }>`
   grid-area: ${(props) => props.area};
   width: 100%;
   aspect-ratio: 1/1;
   background-color: ${(props) => props.bg};
   border-radius: 20px;
`;

function SmallTile({
   id,
   subTitle,
   title,
   icon,
   link,
   bgColor,
}: SmallTileType) {
   return <Container area={id} bg={bgColor}></Container>;
}

export default SmallTile;
