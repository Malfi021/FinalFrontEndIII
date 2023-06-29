import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Queres saber más?</h2>
      <p>Envianos tu consulta</p>
      <Form/>
    </div>
  )
}

export default Contact