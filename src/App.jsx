import Boton from "./componentes/Boton/Boton"
import './App.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal";
import ItemCount  from "./componentes/ItemCount/ItemCount";
import NavBar  from "./componentes/NavBar/NavBar";
import ItemListContainer  from "./componentes/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Computadoras from "./componentes/Computadoras/Computadoras";
import Fundas from "./componentes/Fundas/Fundas";
import Celulares from "./componentes/Celulares/Celulares";
import Menu from "./componentes/Menu/Menu.jsx";

const App = () => {

  function saludo() {
    console.log("Bienvenidos a la tienda Mobile")
  }
  saludo()

  let colorFondo= {backgroundColor: "brown"}
  let colorFondoPrincipal = {backgroundColor: "darkred"}

  const celular = {
    marca: "iPhone 14 pro",
    precio: 725,
  }


  return (
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path="/" element={<ItemListContainer producto={celular}/>}/>
          <Route path="/computadoras" element={<Computadoras/>}/>
          <Route path="/fundas/:id" element={<Fundas/>}/>
          <Route path="/celulares" element={<Celulares/>}/>
        </Routes>
      
      <h1 style={colorFondo}>Mobile Station</h1>
      <h2 style={{color:"darker red"}}>Ofertas Exclusivas</h2>
      <h3 style={colorFondoPrincipal}>Modelos Disponibles</h3>

      <TituloPrincipal 
      saludo="Bienvenidos a la tienda Mobile" producto={celular.marca}/>
      <Boton texto="Cancelar"/> 
      <ItemCount/>
      <NavBar/>
      </BrowserRouter>
  ) 
}

export default App

