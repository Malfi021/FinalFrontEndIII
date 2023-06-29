import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
const  { id } = useParams();
 
  const [dentista, setDentista] = useState({
    name: "",
    email: "",
    phone:"",
    website:"",
  });

  const getDentista = async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    setDentista(data)
    console.log(dentista)
  }

  useEffect(() => {
    const dentistaCargado =  getDentista();
    setDentista(dentistaCargado);
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especific
  return (
    <div>
      <h1>Detalles del Dentista </h1>
      <div className='centrado'>
        <Card name={dentista.name} username={dentista.email} id={dentista.phone} >
          {dentista.website}
        </Card  >
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail