import React, {useState } from 'react'
import { saveAllToLocalStorageHelper } from '../helpers/saveToLocalStorageHelper';
import Editar from './Editar';

export const ListaPeliculas = ({listaPeliculas,setListaPeliculas}) => {
    
    const [editandoPelicula, setEditandoPelicula] = useState(0)
        
    const borrarPelicula = (peliculaAEliminar) => {
        if (window.confirm("¿Deseas eliminar la pelicula: " + peliculaAEliminar.titulo) === true) {
            let nuevaLista = listaPeliculas.filter(peli=>peli.id!==parseInt(peliculaAEliminar.id));            
            setListaPeliculas(nuevaLista);
            saveAllToLocalStorageHelper("peliculas", nuevaLista);
        }
    }
    
    return (
        < section id="content" className="content" >
            {/*Contenido principal*/}

            {listaPeliculas? listaPeliculas.map((peli,key)=>(
                < article className="peli-item" key={key} >
                    {peli.portada? <img src={peli.portada} width="200px" alt={peli.nombre} />: <span>SIN PORTADA</span> }
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <button className="edit" onClick={()=>setEditandoPelicula(peli.id)}>Editar</button>
                    <button className="delete" onClick={()=>borrarPelicula(peli)} >Borrar</button>
                    {editandoPelicula===peli.id && <Editar pelicula={peli} editandoSetter={setEditandoPelicula} listaPeliculas={listaPeliculas} listaPeliculasSetter={setListaPeliculas}/> }

                </article >
            )): <h3>No hay peliculas para mostrar</h3>}            
        </section >
    )
}
