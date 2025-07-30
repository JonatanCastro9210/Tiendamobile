import { useState } from "react"

  const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const incrementar = () => {
        if(contador< 20){
          setContador(contador + 1)
    }
    }
    const decrementar = () => {
        if(contador> 1){
          setContador(contador - 1)
    }
    }

  return (
    <div>
        <h2>Contador</h2>
        <button onClick={incrementar}> + </button>
        <p>{contador}</p>
        <button onClick={decrementar}> - </button>
    </div>
  )
}

export default ItemCount
