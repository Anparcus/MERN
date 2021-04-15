import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AlertaContext from '../../context/alertas/alertaContext';

const NuevaCuenta = () => {

  //Extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  //State para iniciar sesión
  const [usuario, guardarUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: ''
  });

  //Extraer Usuario
  const { nombre, email, password, confirmar } = usuario;

  const onChange = e => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    })
  }

  //Cuando el usuario quiere iniciar sesión
  const onSubmit = e => {
    e.preventDefault();

    //Validar que no haya campos Vacios

    //Password minimo de 6 caracteres

    //Los 2 password iguales

    //Pasarlo al action
  }

  return (
    <div className="form-usuario">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              value={nombre}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite Tu password"
              value={confirmar}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesíón
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
