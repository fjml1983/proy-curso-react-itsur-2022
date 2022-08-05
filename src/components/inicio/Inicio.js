import React from 'react'

import { NavLink } from "react-router-dom";

const Inicio = () => {

  let contenSubStyle = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignItems: "center",
    height: "400px"};

  return (
    <>
    <div className='content' style={contenSubStyle}  >
      <h2>BIENVENIDO A X MOVIES</h2>
      <p>Sitio web que te permitirá gestionar las películas que has visto.</p>
      <img src='https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1517845732/1517845731.jpg' alt='X movies Logo' width={300}></img>
      <p><NavLink to = "/peliculas">¡Comieza ya!</NavLink></p>

    </div>
    <div className='lateral' >
      <h3>Proyecto desarrollado durante el curso de React.JS</h3>
      <img src='https://www.arsys.es/blog/file/uploads/2017/04/React.jpg' alt='React Logo' width={300}></img>
      <div>
        <p><b>Profesor:</b> Martín Adolfo Herrera Parra</p>
        <p><b>Estudiante:</b> Fernando José Martínez López</p>
      </div>
    </div>    
    </>
  )
}

export default Inicio;