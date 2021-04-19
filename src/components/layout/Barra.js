import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {

     //Extraer la informacion de autenticación
     const authContext = useContext(AuthContext);
     const { usuario, usuarioAutenticado, CerrarSesion } = authContext;

     useEffect(() => {
          usuarioAutenticado()
     }, []);

     return (
          <header className="app-header">
               {usuario ? (<p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p>) : null}


               <nav className="nav-principal">
                    <button
                         className="btn btn-blank btn-cerrar-sesion"
                         onClick={() => { CerrarSesion() }}
                    >
                         Cerrar Sesión
                    </button>
               </nav>
          </header>
     );
}

export default Barra;