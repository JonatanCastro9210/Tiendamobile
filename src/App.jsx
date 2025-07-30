import Boton from "./componentes/Boton/Boton"
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import ItemCount  from "./componentes/ItemCount/ItemCount";
import NavBar  from "./componentes/NavBar/NavBar";
import ItemListContainer  from "./componentes/ItemListContainer/ItemListContainer";

const App = () => {

  function saludo() {
    console.log("Bienvenidos a la tienda Mobile")
  }
  saludo()

  let colorFondo= {backgroundColor: "brown"}

  const celular = {
    marca: "iPhone 14 pro",
    precio: 725,
  }


  return (
    <>

    {/* <h1 style={colorFondo}>Mobile Station</h1>
    <h2 style={{color:"darker red"}}>Ofertas Exclusivas</h2>
    <h3 className="colorFondoPrincipal">Modelos Disponibles</h3>
    {/* <TituloPrincipal saludo="Bienvenidos a la tienda Mobile" producto={celular}/>
    <Boton texto="Comprar"/>
    <Boton texto="Cancelar"/> 
    <ItemCount/>*/}
    <ItemListContainer producto={celular}/>
    <NavBar/>
    <ItemListContainer/>
    </>
  )
}

export default App

