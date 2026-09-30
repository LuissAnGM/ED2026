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
    setAlumnos([...alumnos,nuevoalumno]);
    setNuevoNombre("");
  }

  //Eliminar objeto
  const eliminarObjeto = (id)=>{
    const listafilter=alumnos.filter((alumno)=>alumno.id!==id);
    setAlumnos(listafilter);
  }
  //Asistencia 1 por 1
    const agregarAsistencia =(id)=>{
      const listaActualizada = alumnos.map((alumno)=>
      alumno.id ===id
    ?{...alumno,asistencia: alumno.asistencia+1}
    :alumno
    )
    setAlumnos(listaActualizada);
    }
    return (
    <div style = {{padding: "20px", maxWidth:"500px", margin:"0 auto"}}>
        <h2>Operaciones de Arreglos</h2>
        {/* Formulario para agregar los datos */}
        <form onSubmit={agregaralumno} style={{marginBottom:"20px"}}>
          <input type ='text' value={nuevoNombre} 
          onChange={(e)=>setNuevoNombre(e.target.value)}
          style ={{padding:"8px 12px", marginRight:"10px", width: "60%"}}>
            </input>
              <button type='submit' style={{padding:"8px 12px", background:"#4CAF50",color:"white",border:"none",cursor:"pointer"}}>
                Agregar
              </button>
        </form>

        {/* Renderizar la vista */}
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          {alumnos.length===0?(
            <p style={{color:"999",textAlign:"center"}}>
              No hay datos que mostrar
            </p>
          ):(
            alumnos.map((alumno)=>(
              <div key={alumno.id} style={{padding:"10px",border:"1px solid #ccc",
                borderRadius:"4px", display:"flex", justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <strong>{alumno.nombre}</strong>
                    <br/>
                    <span style={{fontSize:"12px",color:"#666"}}>Asistencias:
                      {alumno.asistencia}</span>
        </div>
        <button onClick={()=>eliminarObjeto(alumno.id)}>
          Eliminar
        </button>

        <button onClick={()=>agregarAsistencia(alumno.id)}>
          Asistencia
        </button>
    </div>
  ))
)}
</div>
</div>
)
}
export default Ejemplo2