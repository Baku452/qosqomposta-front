import React, { memo } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

import '@reach/combobox/styles.css';

//Styles
import { LatLng } from 'use-places-autocomplete';

export interface MapContainerProps {
  selected: LatLng;
}
const MapContainer: React.FC<MapContainerProps> = ({ selected }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries: ['places'],
  });

  if (isLoaded) {
    return (
      <div>
        <GoogleMap zoom={15} center={selected} mapContainerClassName="map-container">
          {selected && <MarkerF position={selected} />}
        </GoogleMap>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default memo(MapContainer);
