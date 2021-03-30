import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  //State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: ''
  });

  //Extrae nombre proyecto
  const { nombre } = proyecto;

  //Lee los contenidos del input
  const onSubmitProyecto = e =>{
    e.preventDefault();


    //Validar el proyecto

    //Agregar el State

    //Reiniciar el Form

  }

  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form 
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}  
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
