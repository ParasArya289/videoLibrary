import { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initDataState } from "../Reducer/dataReducer";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer(dataReducer, initDataState);

  useEffect(() => {
    const retrievedState = localStorage.getItem("state");
    if (retrievedState) {
      const parse = JSON.parse(retrievedState);
      dispatchData({ type: "INIT_DATA", payload: parse });
    }
  }, []);

  useEffect(() => {
    if (dataState !== initDataState) {
      const stringify = JSON.stringify(dataState);
      localStorage.setItem("state", stringify);
    }
  }, [dataState]);

  return (
    <dataContext.Provider value={{ dataState, dispatchData }}>
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);
