import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListadoProyectos = () => {


	//Extraer Proyectos de state inicial
	const proyectosContext = useContext(proyectoContext);
	const { proyectos, obtenerProyectos } = proyectosContext;

	//Obtener proyectos cuendo carga el componente
	useEffect(() => {
		obtenerProyectos();
		// eslint-disable-next-line
	}, [])

	//Revisar si proyectos tiene contenido
	if (proyectos.length === 0) return <p>No hay proyectos, comienza creando uno</p>;



	return (
		<ul className="listado-proyectos">
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
