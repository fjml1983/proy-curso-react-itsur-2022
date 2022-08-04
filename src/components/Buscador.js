import React, { useEffect, useState } from 'react'

export const Buscador = ({listaPeliculas,setListaPeliculas}) => {

    const [buscando, setBuscando] = useState('');

    useEffect(() => {
        if(buscando){
            setListaPeliculas(listaPeliculas.filter(peli=>peli.titulo.toLowerCase().includes(buscando)));
        }else{
            setListaPeliculas(JSON.parse(localStorage.getItem("peliculas")));
        }
      
    }, [buscando])
    

    const buscar = (event)=>{
        event.preventDefault();
        setBuscando(event.target.search_field.value.toLowerCase());    
    }
    
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <form  onSubmit = {buscar}>
                <input type="text" id="search_field" />
                {buscando?
                    <button onClick={()=>{setBuscando('')}} >Cancelar</button> 
                  : <input id="search" type="submit" value="Buscar"></input>
                }
            </form>
        </div>
    )
}
