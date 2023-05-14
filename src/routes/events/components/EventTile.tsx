import { createContext } from "react";
import styled from "styled-components";

const Container = styled.div`
   width: 100%;
   margin-top: 20px;
   img {
      background-color: #fefefe;
   }
   :nth-child(2) > img,
   :nth-child(3) > img,
   :nth-child(6) > img {
      background-color: #0262e9;
   }
`;

const Image = styled.img`
   width: 100%;
   aspect-ratio: 1/1;
   border-radius: 10px;
   object-fit: cover;
`;

const TitleText = styled.h2`
   font-size: 17px;
   font-weight: 700;
   margin: 0;
`;

const DescriptionText = styled.p`
   font-size: 12px;
   font-weight: 400;
   margin: 0;
`;

const EventTileContext = createContext({});

function EventTile({
   children,
   onClick,
}: {
   children: React.ReactElement | React.ReactElement[];
   onClick?: () => void;
}) {
   return (
      <EventTileContext.Provider value={{}}>
         <Container onClick={onClick}>{children}</Container>
      </EventTileContext.Provider>
   );
}

function Thumbnail({ src }: { src: string }) {
   const {} = EventTileContext;
   return <Image src={src} />;
}

function Title({ children }: { children: string }) {
   const {} = EventTileContext;
   return <TitleText>{children}</TitleText>;
}

function Description({ children }: { children: string }) {
   const {} = EventTileContext;
   return <DescriptionText>{children}</DescriptionText>;
}

EventTile.Thumbnail = Thumbnail;
EventTile.Title = Title;
EventTile.Description = Description;

export { EventTile };
