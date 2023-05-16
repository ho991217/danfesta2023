export interface GeolocationType {
   lat: number;
   lng: number;
}

export interface MarkerType {
   id: number;
   name: string;
   geolocation: GeolocationType;
   roadview: {
      geolocation: GeolocationType;
   };
}

export interface MapAreaType {
   id: number;
   name: string;
   namePos: GeolocationType;
   path: GeolocationType[];
}
