import { useState } from "react";

function itemDetail ({item}) {
    const [cantidad, setCantidad] = useState(1);
    
    const sumar = () => setCantidad(cantidad + 1);
    const restar = () => cantidad > 1 && setCantidad(cantidad - 1);

    return ( 
        <div style={{border: "1px solid gray", padding: "20px", borderRadius: "10px"}}>
            <h2>{item.nombre}</h2>
            <p>Precio: ${item.precio}</p>

            <div style={{display: "felx", gap: "10px", alignItems: "center"}}>
                <button onClick={restar}>-</button>
                <span>{cantidad}</span>
                <button onClick={sumar}>+</button>
            </div>
            <button style={{marginTop:"10px"}}>Agregar al carrito</button>
        </div>
    )
}
export default itemDetail;