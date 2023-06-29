import React, { useEffect, useReducer } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const getFavoritosFromStorage = () => {
  const localData = localStorage.getItem("favoritos");
  return localData ? JSON.parse(localData) : [];
};

const initialState = {
  favoritos: getFavoritosFromStorage(),
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITOS":
      return { ...state, favoritos: action.payload };
    default:
      return state;
  }
};

const Favs = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { favoritos } = state;

  useEffect(() => {
    const favoritosFromStorage = getFavoritosFromStorage();
    dispatch({ type: "SET_FAVORITOS", payload: favoritosFromStorage });
  }, []);

  return (
    <div>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favoritos.map((favorito) => (
          <Link to={`/dentist/${favorito.id}`} key={favorito.id}>
            <Card name={favorito.name} username={favorito.username} id={favorito.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favs;