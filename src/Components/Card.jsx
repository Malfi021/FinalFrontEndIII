import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import { FaHeart } from "react-icons/fa";
import { useGlobalStates } from "../Context/global.context";

const Card = ({ name, username, id }) => {

  const {favDentist, dispatchfav} = useGlobalStates()
  let isFav = favDentist.some(dentist => dentist.id === id)

  const AddFavs = (name, username, id) => {
    dispatchfav({
      type: "ADD",
      payload: {name, username,id}})
  }

  const RemoveFavs = (id) => {
    dispatchfav({
      type: "REMOVE",
      payload: {id}})
  }

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
        {/* <h5>{id}</h5> */}
      </div>
      <Link to={`/dentist/${id}`} className="cardLink">
        Detalle
      </Link>
      {isFav ? (
        <button className="favButton" onClick={() => RemoveFavs(id)}> Quitar Favorito <FaHeart style={{ color: 'red', fontSize: '14px' }}/> </button>) : (<button className="favButton" onClick={() => AddFavs(name, username, id)}> Agregar Favorito <FaHeart style={{ color: 'grey', fontSize: '14px' }}/> </button>)}
    </div>
  );
};

export default Card;

