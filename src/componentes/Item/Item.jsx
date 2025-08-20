import React from 'react'
<img src={producto.img} alt={producto.nombre} className="producto-img" />

const Item = ({ producto }) => {
  return (
    <div>
      <img src={producto.img} alt={producto.nombre} className="producto-img" />
      <h3>{producto.nombre}</h3>
      <p>Precio: {producto.precio}</p>
      <p>ID: {producto.id}</p>
    </div>
  )
}

export default Item