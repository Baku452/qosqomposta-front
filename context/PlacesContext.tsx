import { extractFields } from '@/utils/utils';
import { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

const PlacesContext = createContext<PlacesContextType | null>(null);
interface Props {
  children: React.ReactNode;
}

export interface Districts {
  nombdep?: string;
  capital?: string;
  value?: string;
  label?: string;
}

export interface PlacesContextType {
  cities?: Districts[];
  setCities: Dispatch<SetStateAction<Districts[] | undefined>>;
}
export const PlacesContextProvider: React.FC<Props> = ({ children }) => {
  const [initialState, setState] = useState<Districts[] | undefined>(undefined);

  const defaultState: PlacesContextType = {
    cities: initialState,
    setCities: setState,
  };

  const fetchCitiesData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_CITIES_API}`);
    const data = await response.json();
    const formattedData = extractFields(data.records);
    setState(formattedData);
  };
  useEffect(() => {
    if (!initialState) {
      fetchCitiesData();
    }
  }, [initialState]);
  return <PlacesContext.Provider value={defaultState}>{children}</PlacesContext.Provider>;
};
export default PlacesContext;
