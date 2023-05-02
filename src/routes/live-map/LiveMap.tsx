import useGeolocation from "react-hook-geolocation";
import { useEffect, useState } from "react";
import CurrentLocationSrc from "assets/icons/current_location.png";
import { MarkerType } from "./MapTypes";
import { AREAS } from "./MapAreas";
import { MARKERS } from "./Markers";
import Marker from "./components/Marker";
import MapArea from "./components/MapArea";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function LiveMap() {
   const [mapInfo, setMapInfo] = useState({
      center: {
         lat: 37.32042579877885,
         lng: 127.12840041323149,
      },
      errMsg: "",
      isLoading: true,
      tileLoaded: false,
   });
   const geolocation = useGeolocation();

   useEffect(() => {
      if (geolocation.error?.PERMISSION_DENIED) {
         setMapInfo({
            ...mapInfo,
            errMsg: "위치 권한 설정을 해주세요.",
            isLoading: false,
         });
      } else if (geolocation.error?.POSITION_UNAVAILABLE) {
         setMapInfo({
            ...mapInfo,
            errMsg: "위치를 찾을 수 없습니다.",
            isLoading: false,
         });
      } else if (geolocation.error?.TIMEOUT) {
         setMapInfo({
            ...mapInfo,
            errMsg: "위치를 찾는데 시간이 너무 오래 걸립니다.",
            isLoading: false,
         });
      } else if (geolocation.error?.message) {
         setMapInfo({
            ...mapInfo,
            errMsg: geolocation.error.message,
            isLoading: false,
         });
      } else {
         setMapInfo({
            ...mapInfo,
            center: {
               lat: geolocation.latitude,
               lng: geolocation.longitude,
            },
            isLoading: false,
         });
      }
   }, []);

   useEffect(() => {
      if (!mapInfo.isLoading && mapInfo.errMsg) {
         alert(mapInfo.errMsg);
      }
   }, []);

   return (
      <Map
         style={{
            width: "100%",
            height: "calc(100vh - 90px)",
         }}
         center={{
            lat: 37.32042579877885,
            lng: 127.12840041323149,
         }}
         onTileLoaded={() => {
            setMapInfo((map) => ({
               ...map,
               tileLoaded: true,
            }));
         }}
         onClick={(_t, mouseEvent) => {
            console.log(
               `lat: ${mouseEvent.latLng.getLat()}, lng: ${mouseEvent.latLng.getLng()}`
            );
         }}
      >
         {mapInfo.tileLoaded &&
            AREAS.map((area) => (
               <MapArea
                  key={area.id}
                  path={area.path}
                  name={area.name}
                  namePos={area.namePos}
               />
            ))}
         {!mapInfo.isLoading && (
            <MapMarker
               position={mapInfo.center}
               image={{
                  src: CurrentLocationSrc,
                  size: {
                     width: 24,
                     height: 24,
                  },
               }}
            ></MapMarker>
         )}
      </Map>
   );
}

export default LiveMap;
