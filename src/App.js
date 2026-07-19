import React from 'react'
import { useState } from "react";
import Select from "./select";

export default function App() {
  const [pagina, setPagina] = useState("inicio");


  const fotosPaisajes = ['Playa2.jpg', 'Banco.jpg','Lago.jpg','Nubes.jpg','Playa.jpg']
  const [fotoSeleccionada, setFotoSeleccionada] = React.useState(0)

  const fotosUnibe = ['Unibe1.jpg', 'Unibe2.jpg', 'Unibe3.jpg', 'Unibe4.jpg']
  const [fotoUnibeSeleccionada, setFotoUnibeSeleccionada] = React.useState(0)
  

  function fotoSiguiente() {
    if (fotoSeleccionada < fotosPaisajes.length - 1) {
      setFotoSeleccionada(fotoSeleccionada + 1)
    }
  }
  function fotoPrevia() {
    if (fotoSeleccionada > 0) {
      setFotoSeleccionada(fotoSeleccionada - 1)
    }
  }

  function fotoUnibeSiguiente() {
    if (fotoUnibeSeleccionada < fotosUnibe.length - 1) {
      setFotoUnibeSeleccionada(fotoUnibeSeleccionada + 1)
    }
  }
  function fotoUnibePrevia() {
    if (fotoUnibeSeleccionada > 0) {
      setFotoUnibeSeleccionada(fotoUnibeSeleccionada - 1)
    }



  }

  return (
    <div>
      <button onClick={() => setPagina("inicio")}>Inicio</button>
      <button onClick={() => setPagina("autos")}>Autos</button>

      {pagina === "inicio" && (
        <div>
          <h2>Fotos de paisajes tomadas por mi</h2>

          <input type="button" value="<" onClick={fotoPrevia} />
          <input type="button" value=">" onClick={fotoSiguiente} />

          <p>
            <img
              src={process.env.PUBLIC_URL + "/img/" + fotosPaisajes[fotoSeleccionada]}
              alt="paisaje"
              width={500}
            />
          </p>

          <p>{fotosPaisajes[fotoSeleccionada]}</p>

          <hr />

          <h2>Fotos Unibe</h2>

          <input type="button" value="<" onClick={fotoUnibePrevia} />
          <input type="button" value=">" onClick={fotoUnibeSiguiente} />

          <p>
            <img
              src={require(`./imgs/${fotosUnibe[fotoUnibeSeleccionada]}`)}
              alt="foto unibe"
              width={500}
            />
          </p>

          <p>{fotosUnibe[fotoUnibeSeleccionada]}</p>
        </div>
      )}

      {pagina === "autos" && <Select/>}
    </div>
  );
}