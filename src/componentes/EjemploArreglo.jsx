import React from 'react'
import { useEffect, useState } from "react";

function EJEMPLOARREGLOS() { // Iniciamos con un estado para un arreglo
  const [elementos, setElementos] = useState([]);

  // Crear función para agregar datos
  const agregarDato = () => {
    const nuevoNumero = Math.floor(Math.random() * 50);

    setElementos([...elementos, nuevoNumero]);
  };

  // Método para recorrer el arreglo
  const recorrerArreglo = (elemento, index) => (
    <li
      key={index}
      style={{
        margin: "5px 0",
        fontSize: "18px"
      }}
    >
      Elemento #{index + 1}: <strong>{elemento}</strong>
    </li>
  );

  // Hook de efecto
  useEffect(() => {
    console.log("El arreglo de datos es: ", elementos);
  }, [elementos]);

  return (
   <>
      <h1>Hola a todos</h1>

      <div style={{ padding: "20px" }}>
        <h2>Paso 1. Agregar datos al arreglo</h2>

        <button onClick={agregarDato}>
          Agregar número de datos
        </button>

        <ul>
          {elementos.map(recorrerArreglo)}
        </ul>
      </div>
    </>
  )
}

export default EJEMPLOARREGLOS