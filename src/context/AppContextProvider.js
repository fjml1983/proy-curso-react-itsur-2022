import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [peliculas,setPeliculas] = useState([]);
    
    useEffect(() => {
        setPeliculas(JSON.parse(localStorage.getItem("peliculas")));
    }, [])

    return <AppContext.Provider value={{
        peliculas,
        agregarPelicula: (pelicula)=>{ 
            setPeliculas([...peliculas, pelicula]);
            localStorage.setItem("peliculas", JSON.stringify(peliculas));
        },
        editarPelicula: (pelicula)=>{ 
            let listaActualizada = peliculas.map(
                p=>{                    
                    if(p.id === pelicula.id){
                        console.log("Peli encontrada:" + p);
                        p.titulo = pelicula.titulo;
                        p.descripcion = pelicula.descripcion;
                        p.portada = pelicula.portada;
                        p.rating = pelicula.rating;
                    }
                    return p; 
                });
            setPeliculas(listaActualizada);
            localStorage.setItem("peliculas", JSON.stringify(peliculas));
        },
        eliminarPelicula: (pelicula)=>{
            if (window.confirm("¿Deseas eliminar la pelicula: " + pelicula.titulo) === true) { 
                let listaActualizada = peliculas.filter(p=>p.id !== pelicula.id);
                setPeliculas(listaActualizada);
                localStorage.setItem("peliculas", JSON.stringify(peliculas));
            }
        },
        buscarPelicula: (texto)=>{
            if (texto) { 
                let listaActualizada = peliculas.filter(
                    p=>p.titulo.toLowerCase().includes(texto));
                setPeliculas(listaActualizada);
            }else{
                setPeliculas(JSON.parse(localStorage.getItem("peliculas")));                
            }
        }

    }}>
        {children}    
    </AppContext.Provider>
}