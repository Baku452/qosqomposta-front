import React, { memo, useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';

export interface PlacesAutocompleteProps {
    setSelected: (value: any) => void;
}
const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({ setSelected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    };

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Ingrese su ubicación"
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === 'OK' &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

const MapContainer: React.FC = () => {
    const center = useMemo(() => ({ lat: -13.5319533, lng: -71.9591915 }), []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
        libraries: ['places'],
    });
    const [selected, setSelected] = useState(null);

    if (isLoaded) {
        return (
            <div>
                <div className="places-container py-5">
                    <PlacesAutocomplete setSelected={setSelected} />
                </div>
                <GoogleMap
                    zoom={15}
                    center={center}
                    mapContainerClassName="map-container"
                >
                    {selected && <MarkerF position={selected} />}
                </GoogleMap>
            </div>
        );
    } else {
        return <div>Loading...</div>;
    }
};

export default memo(MapContainer);
