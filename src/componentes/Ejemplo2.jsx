import React, { useState } from 'react'

function Ejemplo2 () {
  const [alumnos,setAlumnos] =useState ([{id:1,nombre:"Luis",asistencia:1}])
  const [nuevoNombre, setNuevoNombre] = useState ("");

  //crear primera funcion
  const agregaralumno =(e)=>{
    e.preventDefault();
    if (nuevoNombre.trim()==="")return;
    const nuevoalumno={
        id:Date.now(),
        nombre:nuevoNombre,
        asistencia: 0
    }
    //introducir valores al arreglo
    setAlumnos([...alumnos,nuevoNombre]);
    setNuevoNombre("");
  }

  //Eliminar objeto
  const eliminarObjeto = (id)=>{
    const listafilter=alumnos.filter((alumno)=>alumno.id===id);
    setAlumnos(listafilter);
  }
    return (
    <div style = {{padding: "20px", maxWidth:"500px", margin:"0 auto"}}>
        <h1>Operaciones de Arreglos</h1>
    </div>
  )
}

export default Ejemplo2