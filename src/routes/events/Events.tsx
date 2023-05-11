import styled from "styled-components";
import { EventItems } from "./EventItems";
import { EventTile } from "./components/EventTile";

const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 13px;
   width: calc(100% - 40px);
   margin: 20px auto 90px auto;
`;

function Events() {
   return (
      <Container>
         {EventItems.map((event) => (
            <EventTile
               key={event.id}
               onClick={() => {
                  window.open(event.link, "_blank");
               }}
            >
               <EventTile.Thumbnail src={event.imageSrc} />
               <EventTile.Title>{event.title}</EventTile.Title>
               <EventTile.Description>
                  {event.description}
               </EventTile.Description>
            </EventTile>
         ))}
      </Container>
   );
}

export default Events;
