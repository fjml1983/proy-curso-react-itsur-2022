import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider';

export const Buscador = () => {

    const appContext = useContext(AppContext);
    
    const buscar = (event)=>{
        event.preventDefault();
        appContext.buscarPelicula(event.target.value);    
    }
    
    return (
        <div className="search">
            <h3 className="title">Buscar pelicula</h3>
            <input type="text" id="search_field" onChange={buscar} placeholder="Escriba algo para buscar..." />
        </div>
    )
}
