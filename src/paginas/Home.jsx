import React from "react";
import {Link} from 'react-router-dom';
const Home = ()=>{
    return (
        <>
        <div>
            <h1>Bienvenido a mi portfolio</h1>
            <ul>
                <li><Link to ="/Projects">Proyectos</Link></li>
                <li><Link to = "/Resume">Currículum</Link></li>
            </ul>
        </div>
        </>
    );
}

export default Home;