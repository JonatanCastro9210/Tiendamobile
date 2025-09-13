import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar  from "./componentes/NavBar/NavBar";
import ItemListContainer  from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Catalogo de productos" />} />
        <Route path="categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1 style={{ textAlign: "center" }}>404 - Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
