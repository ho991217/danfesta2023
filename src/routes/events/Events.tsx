import styled from "styled-components";
import { EventItems } from "./EventItems";
import { EventTile } from "./components/EventTile";
import { useModal } from "hooks/UseModal";

const Container = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 13px;
   width: calc(100% - 40px);
   margin: 0 auto;
`;

function Events() {
   const { openModal, closeModal } = useModal();
   return (
      <Container>
         {EventItems.map((event) => (
            <EventTile
               key={event.id}
               onClick={() => {
                  openModal({
                     title: event.title,
                     body: (
                        <>
                           <p>{event.description}</p>
                           <div
                              style={{
                                 margin: "10px 0",
                              }}
                           >
                              asd
                           </div>
                           <ul
                              style={{
                                 listStyle: "none",
                                 marginBottom: "50px",
                              }}
                           >
                              <li>운영일자: {event.detail.date}</li>
                              <li>운영시간: {event.detail.time}</li>
                              <li>운영위치: {event.detail.location}</li>
                           </ul>
                        </>
                     ),
                     declineText: "",
                     acceptText: "확인",
                     onAccept: () => {
                        closeModal();
                     },
                  });
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
