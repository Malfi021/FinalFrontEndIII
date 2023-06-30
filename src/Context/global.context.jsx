import React, { createContext, useState, useEffect, useReducer, useContext } from "react";
import {favsReducer} from '../Reducers/favsReducer';
 
export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

    const initFavs = (state) =>{
        return localStorage.getItem("favs") ? JSON.parse(localStorage.getItem("favs")): state;
    }

    const[odonto, setOdonto] = useState([]);
    const[favDentist, dispatchfav] = useReducer(favsReducer,[],initFavs)

      const getOdonto = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        setOdonto(data)
    }

    useEffect(()=>{
        getOdonto()
    });

    useEffect(()=>{
        localStorage.setItem("favs",JSON.stringify(favDentist))
    },[favDentist]);

  return (
    <ContextGlobal.Provider value={{odonto,favDentist,dispatchfav}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useGlobalStates = () =>{
    return useContext(ContextGlobal)
}
