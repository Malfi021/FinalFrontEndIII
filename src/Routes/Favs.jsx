import React, { useEffect, useReducer } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Context/global.context";

const Favs = () => {

  const {favDentist} = useGlobalStates()

    return (
    <div>
      <h1>Dentistas Favoritos</h1>
      <div className="card-grid">
        {favDentist.map((favorito) => (
          <Card name={favorito.name} username={favorito.username} id={favorito.id} />
        ))}
      </div>
    </div>
  );
};

export default Favs;