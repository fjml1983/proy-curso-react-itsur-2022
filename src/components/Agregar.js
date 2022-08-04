import React, { useState } from 'react'
import { saveToLocalStorageHelper } from '../helpers/saveToLocalStorageHelper';

export const Agregar = () => {

    const [pelicula, setPelicula] = useState();

    const guardar = (event)=>{
        event.preventDefault();

        let titulo = event.target.titulo.value;
        let descripcion = event.target.descripcion.value;
        let portada = event.target.portada.value;
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion,
            portada
        }
        console.log(peli);
        setPelicula(peli);
        saveToLocalStorageHelper("peliculas", peli);
    }

    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            {pelicula && <p>Has guardado la pelicula {pelicula.titulo}</p>}
            <form onSubmit={guardar}>
                <input type="text" id="titulo" placeholder="Titulo" />
                <textarea id="descripcion" placeholder="Descripción"></textarea>
                <input type="text" id="portada" placeholder="URL de la portada" />
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    )
}
