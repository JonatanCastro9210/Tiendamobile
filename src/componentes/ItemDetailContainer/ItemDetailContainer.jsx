import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import productos from "../data/productos";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState(null);
    const {itemId} = useParams();

    useEffect (() => {
        const getItem = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(productos.find((prod) => prod.id === Number(itemId)));
            }, 500);
        });
        getItem.then((res) => setItem(res));
        }, [itemId]);
    
        return (
            <div>
                {item ? <ItemDetail producto={item} /> : <p>Cargando...</p>}
            </div>
        )
    }

    export default ItemDetailContainer;