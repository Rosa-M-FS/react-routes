import React from "react";
import {Link} from 'react-router-dom';
import projects from '../data/projects';

const Projects =()=>{
    return (
        <>
        <div>
            {/* Agrego un enlace a Home */}
            <li><Link to='/'>Página principal</Link></li>
        </div>
        <div>
            <h1>Proyectos Realizados</h1>
            <ul>
                {projects.map((project)=>{
                    return(
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.name}/><br></br>
                        <a href={project.url}>Detalle de proyecto</a>
                    </li>
                    )
                })}
            </ul>
        </div>

        </>
    )
}

export default Projects;