import React from 'react'
import { useState } from "react";
import Select from "./select";
import './App.css'

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
    <div className="app-container">
      <header className="app-header">
        <h1>Actividad 5</h1>
        <nav className="app-nav">
          <button className="nav-button" onClick={() => setPagina("inicio")}>Inicio</button>
          <button className="nav-button" onClick={() => setPagina("autos")}>Autos</button>
        </nav>
      </header>

      {pagina === "inicio" && (
        <main className="page-content">
          <section className="card">
            <h2>Fotos de paisajes tomadas por mi</h2>
            <div className="button-row">
              <button className="action-button" onClick={fotoPrevia}>&lt;</button>
              <button className="action-button" onClick={fotoSiguiente}>&gt;</button>
            </div>

            <p className="image-wrapper">
              <img
                src={process.env.PUBLIC_URL + "/img/" + fotosPaisajes[fotoSeleccionada]}
                alt="paisaje"
                width={500}
                className="photo"
              />
            </p>

            <p>{fotosPaisajes[fotoSeleccionada]}</p>
          </section>

          <hr className="divider" />

          <section className="card">
            <h2>Fotos Unibe</h2>
            <div className="button-row">
              <button className="action-button" onClick={fotoUnibePrevia}>&lt;</button>
              <button className="action-button" onClick={fotoUnibeSiguiente}>&gt;</button>
            </div>

            <p>
              <img
                src={require(`./imgs/${fotosUnibe[fotoUnibeSeleccionada]}`)}
                alt="foto unibe"
                width={500}
                className="photo"
              />
            </p>

            <p>{fotosUnibe[fotoUnibeSeleccionada]}</p>
          </section>
        </main>
      )}

      {pagina === "autos" && <Select />}
    </div>
  );
}