import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";
import {ThemeContext} from "../Context/ThemeContextProvider"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext); 
  
  const handleToggleTheme = () => {
    toggleTheme()
    }

  return (
    <nav className={`nav ${theme}`}>
      <ul className={`ul ${theme}`}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/contacto"}>Contacto</Link>
          </li>
          {/* <li>
            <Link to={"/dentist"}>Detalle</Link>
          </li> */}
          <li>
            <Link to={"/favs"}>Favoritos</Link>
          </li>
          {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      </ul>
      <button onClick={handleToggleTheme}>Cambiar Tema</button>
      </nav>
  );
};

export default Navbar;