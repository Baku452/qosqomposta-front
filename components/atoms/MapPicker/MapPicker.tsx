import React, { memo, useContext, useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import { DEFAULT_LATITUDE_MAP, DEFAULT_LONGITUTED_MAP } from '@/main.config';
import { Controller, useFormContext } from 'react-hook-form';

//Styles
import formStyles from '../../molecules/SignUpForm/signUp.module.scss';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';

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

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
    handleLocationChange(address, lat, lng);
  };
  const { formState, setFormState } = useContext(SignUpContext) as SignUpContextType;

  const handleLocationChange = (address: string, lat?: number, long?: number) => {
    if (formState) {
      setFormState({
        ...formState,
        location: {
          ...formState.location,
          address: address,
          longitude: long,
          latitude: lat,
        },
      });
    } else {
      setFormState({
        location: {
          address: address,
          longitude: long,
          latitude: lat,
        },
      });
    }
  };
  return (
    <Controller
      control={control}
      name="address"
      render={() => (
        <>
          <Combobox onSelect={handleSelect}>
            <ComboboxInput
              {...register('address')}
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
          {errors.address && (
            <span className={formStyles.errorLabel}>
              {errors.address.message?.toString()}
            </span>
          )}
        </>
      )}
    />
  );
};

const MapContainer: React.FC = () => {
  const center = useMemo(
    () => ({ lat: DEFAULT_LATITUDE_MAP, lng: DEFAULT_LONGITUTED_MAP }),
    [],
  );
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
        <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
          {selected && <MarkerF position={selected} />}
        </GoogleMap>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default memo(MapContainer);
