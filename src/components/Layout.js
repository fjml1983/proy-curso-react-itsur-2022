import React from 'react'
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>X Movies</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><NavLink to="/inicio">Inicio</NavLink></li>
                <li><NavLink to="/peliculas">Peliculas</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
        </nav>

        <Outlet/>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Proyecto Final - <a href="/#">FJML 2022 Todos los derechos reservados</a>
        </footer>

      </div>
    </div>
  )
}

export default Layout