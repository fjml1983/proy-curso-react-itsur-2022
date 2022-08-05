import React, {useContext, useState } from 'react'
import { AppContext } from '../../context/AppContextProvider';
import { Agregar } from './Agregar';
import { Buscador } from './Buscador';
import Editar from './Editar';
import { Rating } from 'react-simple-star-rating'

const ListaPeliculas = () => {
    
    const appContext = useContext(AppContext);

    const [editandoPelicula, setEditandoPelicula] = useState(0)

    // Catch Rating value
    const handleRating = (rate,peli) => {
        let peliEdit = {
            id: peli.id,
            titulo : peli.titulo,
            descripcion : peli.descripcion,
            portada : peli.portada,
            rating: rate
        }

        appContext.editarPelicula(peliEdit);    
    }

    return (
        <>
        < section id="content" className="content" >
            {/*Contenido principal*/}

            {appContext.peliculas? appContext.peliculas.map((peli,key)=>(
                < article className="peli-item" key={key} >
                    {peli.portada? <img src={peli.portada} width="200px" alt={peli.nombre} />: <span>SIN PORTADA</span> }
                    <h3 className="title">{peli.titulo}</h3>
                    <p className="description">{peli.descripcion}</p>
                    <div><Rating onClick={ (rate)=>{handleRating(rate,peli)}} ratingValue={peli.rating? peli.rating:0} /></div>
                    <button className="edit" onClick={()=>setEditandoPelicula(peli.id)}>Editar</button>
                    <button className="delete" onClick={()=>appContext.eliminarPelicula(peli) } >Borrar</button>
                    {editandoPelicula===peli.id && <Editar pelicula={peli} editandoSetter={setEditandoPelicula} /> }

                </article >
            )): <h3>No hay peliculas para mostrar</h3>}            
        </section >
        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador />
            <Agregar/>
        </aside>

        </>
    )
}

export default ListaPeliculas;