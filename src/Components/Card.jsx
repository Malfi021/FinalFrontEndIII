import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FaHeart } from "react-icons/fa";

const Card = ({ name, username, id }) => {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const esFavorito = favoritos.some((favorito) => favorito.id === id);

  const addFav = () => {
    const index = favoritos.findIndex((favorito) => favorito.id === id);

    if (index !== -1) {
      // El favorito ya existe, eliminarlo del array
      favoritos.splice(index, 1);
    } else {
      // El favorito no existe, agregarlo al array
      favoritos.push({ name, username, id });
    }

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  };

  return (
    <div className="card">
      <img
        className="ImgCard"
        src="/images/doctor.jpg"
        alt="doctor placeholder"
      />
      <div className="CardBody">
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h5>{id}</h5>
      </div>
      <Link to={`/dentist/${id}`} className="cardLink">
        Detalle
      </Link>
      <button onClick={addFav} className="favButton">
        Favorito {esFavorito ? <FaHeart style={{ color: 'red', fontSize: '14px' }} /> : <FaHeart style={{ color: 'grey', fontSize: '14px' }} />}
      </button>
    </div>
  );
};

export default Card;

//ver css centrado
//ver padding footer
