import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";   
import productos from "../data/productos";
import ItemList from "../Itemlist/Itemlist";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState ([]);
  const { categoriaId } = useParams ();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 500);
    });

    getData.then((res) => {
      if (categoriaId) {
        setItems(res.filter((prod) => prod.categoria === categoriaId));
      } else {
        setItems(res);
      }
    });
  }, [categoriaId]);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList items={items} />
    </div>
  );
}
export default ItemListContainer;