import React from 'react'

export const ItemListContainer = ({producto}) => {
  return (
    <div>{producto.marca}
    <p>Precio: Us${producto.precio}</p>
    </div>
  )
}
