import React, { useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom';
import { useGlobalStates } from '../Context/global.context';

const Home = () => {
  
  const {odonto} = useGlobalStates()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {odonto.length
        ? odonto.map(odontologo => (
          <Card name={odontologo.name} username={odontologo.username} id={odontologo.id}  />
        ))
        : null
        }
      </div>
    </main>
  )
}

export default Home