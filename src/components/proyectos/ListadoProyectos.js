import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {


	//Extraer Proyectos de state inicial
	const proyectosContext = useContext(proyectoContext);
	const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

	const alertaContext = useContext(AlertaContext);
	const { alerta, mostrarAlerta } = alertaContext;

	//Obtener proyectos cuendo carga el componente
	useEffect(() => {

		//Si hay un error
		if (mensaje) {
			mostrarAlerta(mensaje.msg, mensaje.categoria);
		}

		obtenerProyectos();
		// eslint-disable-next-line
	}, [mensaje]);

	//Revisar si proyectos tiene contenido
	if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;



	return (
		<ul className="listado-proyectos">

			{alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}

			<TransitionGroup>
				{proyectos.map(proyecto => (
					<CSSTransition
						key={proyecto._id}
						timeout={350}
						classNames="proyecto"
					>
						<Proyecto
							proyecto={proyecto}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</ul>
	);
}

export default ListadoProyectos;
