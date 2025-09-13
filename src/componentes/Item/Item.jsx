import { Link } from "react-router-dom";

const iTem = ({producto}) => {
  return (
    <div style={{border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
      <h3>{producto.nombre}</h3>
      <p>Precio: {producto.precio}</p>

    </div>
  );
}
export default iTem;