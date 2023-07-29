import { createContext, useReducer } from "react";

export const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dispatchData] = useReducer("", "");
  return <dataContext.Provider>{children}</dataContext.Provider>;
};
