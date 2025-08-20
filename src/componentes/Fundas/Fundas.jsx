import { useParams } from "react-router-dom"

const Fundas = () => {

  const {id} = useParams()
  console.log(id)

  return (
    <div>
      <h2>Fundas</h2>
      <p>ID Producto: {id}</p>
    </div>
  )
}

export default Fundas