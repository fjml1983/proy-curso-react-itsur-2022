import React from 'react'

const Contacto = () => {

  const enviar = (event)=>{
    event.preventDefault();
    console.log(event.target.email.value);
    alert("Tu mensaje ha sido enviado");
    event.target.reset();
  }

  return (
    <div style={{ marginBottom:"24px"}}>
        <h1>Dejanos tus comentarios</h1>
        <p>¡Queremos saber de ti!</p>        
        <form  onSubmit={enviar}>
          <div><input type="email" id="email" placeholder='email...' style={{width:"80%"}} ></input></div>
          <div><textarea id="mensaje" placeholder='mensaje...' style={{width:"80%", marginTop:"8px", height: "150px"}}></textarea></div>
          <input type="submit"/>
        </form>

    </div>
  )
}

export default Contacto