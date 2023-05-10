import MapContainer from '@/components/atoms/MapPicker/MapPicker';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//Styles
import formStyles from '../signUp.module.scss';
import { useContext, useEffect, useState } from 'react';
import SignUpContext, { SignUpContextType } from '@/context/SignUpContext';
import { FormLocation, InputsSignUpForm } from '@/types/mainTypes';
import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover,
} from '@reach/combobox';
import usePlacesAutocomplete, {
  LatLng,
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import { DEFAULT_LATITUDE_MAP, DEFAULT_LONGITUTED_MAP } from '@/main.config';
export interface StepPickupPlaceProps {
  currentStep: number;
  handleStepForm: (valueStep: number, isValid: boolean) => void;
  increaseStep: () => void;
}
const StepPickupPlace: React.FC<StepPickupPlaceProps> = ({
  currentStep,
  handleStepForm,
  increaseStep,
}) => {
  const { formState: formAppState, setFormState } = useContext(
    SignUpContext,
  ) as SignUpContextType;
  const [selected, setSelected] = useState<LatLng>({
    lat: DEFAULT_LATITUDE_MAP,
    lng: DEFAULT_LONGITUTED_MAP,
  });

  const [inputDisabled, setInputDisabled] = useState<boolean>(false);
  const validationSchema = yup.object().shape({
    address: yup.string().trim().required('Este campo es requerido'),
    reference: yup.string().trim().required('Este campo es requerido').nullable(),
  });

  const {
    control,
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormLocation>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
  const onSubmit = () => {
    console.log(isValid);
    handleStepForm(currentStep, isValid);
    increaseStep();
  };

  const handleReferenceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (formAppState) {
      setFormState((prevState: InputsSignUpForm) => {
        const updatedForm: InputsSignUpForm = {
          ...prevState,
          location: {
            ...prevState.location,
            reference: value,
          },
        };
        return updatedForm;
      });
    }
  };

  const handleLocationChange = (address: string, lat?: number, long?: number) => {
    setFormState((prevState: InputsSignUpForm) => {
      const newFormState: InputsSignUpForm = {
        ...prevState,
        location: {
          ...prevState.location,
          address: address,
          longitude: long ?? 0,
          latitude: lat ?? 0,
        },
      };
      return newFormState;
    });
  };

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
    handleLocationChange(address, lat, lng);
  };

  useEffect(() => {
    setInputDisabled(!ready);
  }, [ready]);

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <h2>Ingrese sus datos para el recojo</h2>
        <p>Actualmente solo hacemos recojo en la ciudad de Cusco*</p>
        <div className="places-container py-5">
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
                    disabled={inputDisabled}
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
        </div>

        <MapContainer selected={selected} />
        <div className="mb-5 mt-5">
          <label>Referencia del lugar *</label>
          <Controller
            control={control}
            name="reference"
            render={() => (
              <>
                <input
                  value={formAppState?.location?.reference}
                  {...register('reference', {
                    onChange: handleReferenceChange,
                  })}
                />
                {errors.reference && (
                  <span className={formStyles.errorLabel}>
                    {errors.reference.message?.toString()}
                  </span>
                )}
              </>
            )}
          />
        </div>
        <button type="submit" className="btn btn-primary m-auto text-center block">
          Siguiente
        </button>
      </form>
    </>
  );
};

export default StepPickupPlace;
