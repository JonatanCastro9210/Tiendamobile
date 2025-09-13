import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
    <Link to="/">Inicio</Link>
    <Link to="/categoria/celulares">Celulares</Link>
    <Link to="/categoria/accesorios">Accesorios</Link>
    <Link to="/categoria/tablets">Tablets</Link>
    </nav>

  );
}
export default NavBar;