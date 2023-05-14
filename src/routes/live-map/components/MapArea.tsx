import { useModal } from "hooks/UseModal";
import { CustomOverlayMap, Polygon, PolygonProps } from "react-kakao-maps-sdk";
import styled from "styled-components";

const AreaLabel = styled.span`
   color: ${({ theme }) => theme.color.white};
   font-size: 10px;
   font-weight: 500;
   text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

interface MapAreaProps extends PolygonProps {
   name: string;
   namePos: {
      lat: number;
      lng: number;
   };
}

function MapArea({ path, namePos, name }: MapAreaProps) {
   const { openModal } = useModal();

   const handleRoadviewOpen = () => {
      openModal({
         title: "위치",
         body:  !isNaN(name) ? ,
         acceptText: "",
         declineText: "닫기",
      });
   };
   return (
      <>
         <Polygon
            path={path}
            strokeWeight={3}
            strokeColor={"#0262E9"}
            strokeOpacity={0.8}
            strokeStyle={"longdash"}
            fillColor={"#2E6CC5"}
            fillOpacity={0.33}
            onClick={handleRoadviewOpen}
         />
         <CustomOverlayMap position={namePos}>
            <div onClick={handleRoadviewOpen}>
               <AreaLabel>{name}</AreaLabel>
            </div>
         </CustomOverlayMap>
      </>
   );
}

export default MapArea;
