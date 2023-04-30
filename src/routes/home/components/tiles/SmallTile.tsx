import { CustomDomComponent } from "framer-motion";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled, { StyledComponent } from "styled-components";

const Container = styled.div<{ area: string }>`
   grid-area: ${(props) => props.area};
   width: 100%;
   aspect-ratio: 1/1;
   border-radius: 20px;
   overflow: hidden;
   box-shadow: 0px 25px 50px 5px rgba(0, 0, 0, 0.2);
`;

const StyledLink = styled(Link)<{ bg: string; textColor: string }>`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   text-decoration: none;
   color: ${({ textColor }) => textColor};
   padding: 18px;
   background-color: ${(props) => props.bg};
   z-index: 1px;
`;

const SubInfoContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   span {
      font-size: 12px;
   }
`;

const Title = styled.span`
   width: 100%;
   text-align: left;
   font-size: 17px;
   font-weight: 600;
   white-space: pre-wrap;
   line-height: 1.2em;
`;

export interface SmallTileProps {
   id: string;
   subTitle: string;
   title: string;
   Icon: StyledComponent<CustomDomComponent<{}>, any, {}, never>;
   link: string;
   bgColor: string;
   textColor?: string;
}

function SmallTile({
   id,
   subTitle,
   title,
   Icon,
   link,
   bgColor,
   textColor,
}: SmallTileProps) {
   const [tokenized, setTokenized] = useState("");

   useEffect(() => {
      const tokenizedTitle = title.replaceAll("/", "\n");
      setTokenized(tokenizedTitle);
   }, [title]);

   return (
      <Container area={id}>
         <StyledLink to={link} bg={bgColor} textColor={textColor ?? "black"}>
            <SubInfoContainer>
               <span>{subTitle}</span>
               <Icon />
            </SubInfoContainer>
            <Title>{tokenized}</Title>
         </StyledLink>
      </Container>
   );
}

export default memo(SmallTile);
