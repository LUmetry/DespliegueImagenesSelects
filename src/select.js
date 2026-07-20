import './App.css'
import { useState } from 'react'
import { rubros } from './datos.js'
import { articulos } from './datos.js'


function Select() {

  const [rubro, setRubro] = useState(rubros[0])
  const [articulosRubro, setarticulosRubro] = useState(articulos.filter(articulo => articulo.codigorubro === rubro.codigo))
  const [articulo, setArticulo] = useState(articulosRubro[0])

  function cambiarRubro(e) {
    setRubro(rubros.find(rubro => rubro.codigo === Number.parseInt(e.target.value)))
    const articulosrubro = articulos.filter(articulo => articulo.codigorubro === Number.parseInt(e.target.value))
    setarticulosRubro(articulosrubro)
    setArticulo(articulosrubro[0])
  }

  function cambiarArticulo(e) {
    setArticulo(articulosRubro.find(articulo => articulo.codigo === Number.parseInt(e.target.value)))
  }

  return (
    <div className="formulario">
      <div className="select-card">
        <select value={rubro.codigo} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.codigo} value={rubro.codigo}>{rubro.nombre}</option>
          ))}
        </select>
      </div>
      <div>
        <select value={articulo.codigo} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.codigo} value={articulo.codigo}>{articulo.nombre}</option>
          ))}
        </select>
      </div>
      <div className="select-details">
        <ul>
          <li>Tipo de auto:<strong>{rubro.nombre}</strong></li>
          <li>Modelo:<strong>{articulo.nombre}</strong></li>
          <li>Precio:<strong>{articulo.precio}</strong></li>
        </ul>
      </div>
    </div>
  );
}

export default Select;