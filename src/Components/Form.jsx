import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const [VerError, setVerError] = useState("");

  const onChangeNombre = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };

  const onChangeEmail = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
  };

  const validarNombre = (n) => {
    const regex = /^[A-Za-z\s]{5,30}$/;
    if (regex.test(n)) {
      // setName(value);
      return true;
    } else {
      return false;
    }
    // let esNombreValido = false;
    // if (n[0] == " ") {
    //   esNombreValido = false;
    // }
    // const nSinEspacio = n.trim();

    // const hasNumber = nSinEspacio.some((character) => {
    //   if (isNaN(character)) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });

    // if (nSinEspacio.length >= 5 && hasNumber == true) {
    //   esNombreValido = true;
    // } else {
    //   setVerError("Por favor chequea que la información sea correcta");
    //   alert("Por favor verifique su información nuevamente");
    //   esNombreValido = false;
    // }
    // return esNombreValido;
  };

  const validarEmail = (em) => {
    let esEmailValido = false;
    const emSinEspacio = em.trim();

    const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
    if (emailRegexp.test(emSinEspacio)) {
  
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUsernameValid = validarNombre(usuario.nombre);
    const isEmailValid = validarEmail(usuario.email);

    if (isUsernameValid && isEmailValid) {
      alert(
        `Gracias ${usuario.nombre}!! Te contactaremos cuanto antes vía mail`
      );
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("");
    } else {
      alert("Ingrese datos validos");
      setUsuario({
        nombre: "",
        email: "",
      });
      setVerError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={onChangeNombre}
        />
        <input
          type="text"
          placeholder="Email"
          value={usuario.email}
          onChange={onChangeEmail}
        />

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
