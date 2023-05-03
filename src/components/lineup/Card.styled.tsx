import styled from "styled-components";
import BgSrc from "assets/images/card_bg.png";

const Container = styled.div`
   border-radius: 10px;
   width: calc(100vw - 40px);
   height: 170px;
   background-image: url(${BgSrc});
   background-size: cover;
   background-position: -120%;
   background-size: 200%;
   box-shadow: inset -40px -40px 50px 1px rgba(0, 0, 0, 0.5);
   padding: 17px;
   display: flex;
   flex-direction: column;
   align-items: space-between;
   justify-content: space-between;
   position: relative;
   overflow: hidden;
`;

const TileTitle = styled.h6`
   font-size: 12px;
   color: ${({ theme }) => theme.color.white};
   font-weight: 300;
   z-index: 2;
`;

const ArtistImage = styled.img`
   position: absolute;
   bottom: 0;
   right: 50%;
   transform: translateX(50%);
   z-index: 1;
`;

const LabelContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   z-index: 2;
`;

const LineUpLabel = styled.span`
   color: ${({ theme }) => theme.color.white};
   line-height: 0.1em;
   font-size: 14px;
   font-weight: 500;
`;

const ArtistName = styled.span`
   font-size: 40px;
   font-weight: 700;
   color: ${({ theme }) => theme.color.white};
`;

const CardComponents = {
   Container,
   TileTitle,
   ArtistImage,
   LabelContainer,
   LineUpLabel,
   ArtistName,
};

export default CardComponents;
