import { useModal } from "hooks/UseModal";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { MarkerType } from "../MapTypes";
import { useState } from "react";

function Marker({ geolocation, name, roadview }: MarkerType) {
   return <CustomOverlayMap position={geolocation}></CustomOverlayMap>;
}

export default Marker;
