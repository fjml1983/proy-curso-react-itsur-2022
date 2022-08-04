import React from 'react'

const Editar = ({pelicula,editandoSetter,listaPeliculas,listaPeliculasSetter}) => {

    const guardar = (e)=>{
        e.preventDefault();
        if(window.confirm("¿Desea guardar la información modificada?") === true){            
            const listaActualizada = listaPeliculas.map(
                peli=>{                    
                    if(peli.id === pelicula.id){
                        console.log("Peli encontrada:" + peli);
                        peli.titulo = e.target.titulo.value;
                        peli.descripcion = e.target.descripcion.value;
                        peli.portada = e.target.portada.value;
                    }
                    return peli; 
                });
            
            editandoSetter(0);
            console.log(listaActualizada);
            listaPeliculasSetter(listaActualizada);

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