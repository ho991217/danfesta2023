import { useModal } from "hooks/UseModal";
import { Polygon, CustomOverlayMap, PolygonProps } from "react-kakao-maps-sdk";
import styled from "styled-components";

const AreaLabel = styled.span`
   color: ${({ theme }) => theme.color.white};
   font-size: 1.2rem;
   font-weight: 500;
   text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

interface MapAreaProps extends PolygonProps {
    name: string;
    namePos: {
        lat: number;
        lng: number;
    };
    text: string;
 }
 
function MapName({ path, namePos, name, text }: MapAreaProps) {
    const {openModal} = useModal();

    const setOpenModal = () => {
        openModal({
            title: "부스맵 정보",
            body : text,
            acceptText: "",
            declineText:"닫기"
        })
    }
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
           onClick={setOpenModal}
        />
        <CustomOverlayMap position={namePos}>
           <div onClick={setOpenModal}>
              <AreaLabel>{name}</AreaLabel>
           </div>
        </CustomOverlayMap>
     </>
    )
}

export default MapName;

