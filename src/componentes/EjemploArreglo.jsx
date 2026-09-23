import { useEffect, useState } from "react" 

function EjemploArreglo() {
    //iniciamos con un estado para un arreglo
    const [elementos,setElementos]=useState([]);  
    
    //crear funcion para agregar datos
    const agregarDato=()=>{
      const nuevoNumero=Math.floor(Math.random()*50);
      setElementos([...elementos, nuevoNumero])
    }
    
    //Metodo para recorrer el arreglo
    const datos=(elementos,index)=>{
    <li key={index} style={{margin:`5px 0`,fontsize:`18px`}}>
      elemento #{index+1}<strong>{elementos}</strong>  
      </li>
    }
    
    //Hook de efecto
    useEffect(()=>{
    console.log("El arreglo de datos actual es: ",elementos)
    },[elementos])
    
    //inicia el return
  return (
   <>
      <h1>Mi primer arreglo de datos</h1>
      <div style={{padding:`20px`}}>
        <h2>Paso1. Agregar datos del arreglo</h2>
        <button onClick={agregarDato}>Agregar Numero aleatorio</button>
        <ul>
          {/*Si el arreglo seta vacio envia un mensaje*/}
          {elementos.length===0 ?(
          <>
            <p>aun no hay elementos en el arreglo</p>
            <p>Presiona el boton agregar datos</p>
          </>
          ):(elementos.map(datos))}
        </ul>
        </div>
    
    </>
  )
}

export default EjemploArreglo