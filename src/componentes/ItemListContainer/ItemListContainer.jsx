import { useEffect, useState } from "react";
import {getProductos} from "../asyncmock";
import ItemList from "./Itemlist";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((res) => setProductos(res));
  }, []);

  return (
    <div>
      <h2>Mis Productos</h2>
      <Itemlist productos={productos} />
    </div>
  )
}

export default ItemListContainer