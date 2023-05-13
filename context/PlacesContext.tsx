import { Dispatch, SetStateAction, createContext, useState } from 'react';

const PlacesContext = createContext<PlacesContextType | null>(null);
interface Props {
  children: React.ReactNode;
}

export interface Districts {
  nombdep?: string;
  capital?: string;
}

export interface PlacesContextType {
  cities?: Districts[];
  setCities: Dispatch<SetStateAction<Districts[]>>;
}
export const PlacesContextProvider: React.FC<Props> = ({ children }) => {
  const [initialState, setState] = useState<Districts[]>([]);

  const defaultState: PlacesContextType = {
    cities: initialState,
    setCities: setState,
  };
  return <PlacesContext.Provider value={defaultState}>{children}</PlacesContext.Provider>;
};
export default PlacesContext;
