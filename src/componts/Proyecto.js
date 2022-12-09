import React from 'react';
import '../css/Proyecto.css';

/*Creamosun Componente */
function Proyecto(props){
    return(
        <div className='contenedor-proyecto'>
            <center>
            <img className='imagen-proyecto'
            src={require(`../img/proyecto-${props.imagen}.png`)}
            alt='FotoFirst'/>
            </center>

            <div className='contenedor-texto-proyecto'>
               <p className='nombre-proyecto'>
              Proyecto: <strong> {props.nombre}</strong> <br></br>
               Autor:  <strong> {props.autor}</strong></p>
                <p className='tecnologia-proyecto'>
                Tecnologia:    <strong>{props.tecnologia}</strong> <br></br> 
                Aréa:    <strong> {props.empresa}</strong></p>
                <p className='texto-proyecto'><strong>{props.proyecto}</strong></p>
                Acceder:  <strong>{props.link}</strong>
            </div>
            

        </div>  
    )
}
export default Proyecto;