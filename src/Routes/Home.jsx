import React, { useState } from 'react'
import Card from '../Components/Card'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const[odonto, setOdonto] = useState([]);

  const getOdonto = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setOdonto(data)
  }

  useEffect(()=>{
    getOdonto()
  });

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odonto.length
        ? odonto.map(odontologo => (
          <Link to={`/dentist/${odontologo.id}`} key={odontologo.id}>  
              <Card name={odontologo.name} username={odontologo.username} id={odontologo.id}  />
          </Link>
        ))
        : null
        }
        {/* Aqui deberias renderizar las cards */}   {/* RENDERIZAN */}
      </div>
    </main>
  )
}

export default Home