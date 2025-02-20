import React from "react";
import { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

//here children is the App component for exapmle: <App /> in index.js that is wraped inside DataLayer
//initialState is the initial state of the data layer
//reducer is the function that manipulates the data layer
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);