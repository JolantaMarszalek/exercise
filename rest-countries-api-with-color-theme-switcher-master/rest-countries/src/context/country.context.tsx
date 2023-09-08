import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { CountryProps } from "../components/CountryList/CountryList.component";

interface CountryContextState {
  data: CountryProps[] | [];
  loading: boolean;
  setLoadMore: Dispatch<SetStateAction<number>>;
  // value: string;
}

const InitialState = {
  data: [],
  loading: false,
  setLoadMore: () => null,
  // value: "",
};

// interface ProviderProps<T> {
//   value: T;
//   children?: ReactNode;
// }

interface ProviderProps {
  // value: string;
  children: ReactNode;
}

export const CountryContext = createContext<CountryContextState>(InitialState);

export const CountryContextProvider = ({ children }: ProviderProps) => {
  return (
    <CountryContext.Provider
      // ** // I don't know how to fix it :( // ** //
      value={fetch(
        `https://restcountries.com/v2/all?fields=name,capital,flag,population,region`
        // `https://restcountries.com/v2/name/${country}?fields=name,nativeName,capital,region,subregion,borders,flag,population,topLevelDomain,currencies,languages&fullText=true`
      )}>
      {children}
    </CountryContext.Provider>
  );
};

export const useData = () => useContext(CountryContext).data;
