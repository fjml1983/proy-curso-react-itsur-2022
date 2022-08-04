import { useEffect, useState } from "react";
import { Agregar } from "./components/Agregar";
import { Buscador } from "./components/Buscador";
import { ListaPeliculas } from "./components/ListaPeliculas";


function App() {

  const [listaPeliculas,setListaPeliculas] = useState([]);

  //Cargar peliculas
  useEffect(()=>{
      setListaPeliculas(JSON.parse(localStorage.getItem("peliculas")));
  },[]);

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
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        <ListaPeliculas listaPeliculas={listaPeliculas} setListaPeliculas={setListaPeliculas}/>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador listaPeliculas={listaPeliculas} setListaPeliculas={setListaPeliculas}/>
            <Agregar/>
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Primer Proyecto - <a href="/#">Martin Adolfo 2022 Todos los derechos reservados</a>
        </footer>

      </div>
    </div>
  );
}

export default App;
