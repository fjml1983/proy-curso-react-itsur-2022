import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContextProvider';

const Editar = ({pelicula,editandoSetter}) => {

    const appContext = useContext(AppContext);

    const guardar = (e)=>{
        e.preventDefault();
        if(window.confirm("¿Desea guardar la información modificada?") === true){            

            let peliEdit = {
                id: pelicula.id,
                titulo : e.target.titulo.value,
                descripcion : e.target.descripcion.value,
                portada : e.target.portada.value
            }

            appContext.editarPelicula(peliEdit);
            editandoSetter(0);
        }
    }

    return (
        <div className="edit">
            <h3 className="title">Editar pelicula</h3>
            <p>Esta editando la pelicula {pelicula.titulo}</p>
            <form onSubmit={guardar}>
                <div><input type="text" id="titulo" placeholder="Titulo" defaultValue={pelicula.titulo} /></div>
                <div><textarea id="descripcion" placeholder="Descripción" defaultValue={pelicula.descripcion} ></textarea></div>
                <div><input type="text" id="portada" placeholder="URL de la portada" defaultValue={pelicula.portada} /></div>
                <div><input type="submit" id="save" value="Guardar" />
                     <input type="button" id="cancel" value="Cancelar" onClick={()=>{editandoSetter(0)}} /></div>
            </form>
        </div>
    )
}

export default Editar