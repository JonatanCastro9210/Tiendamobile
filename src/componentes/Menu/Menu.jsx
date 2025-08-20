import { Link, NavLink } from "react-router-dom";

const Menu = () => {

  return (
    <header>
      <Link to="/">
      <h1>Mobile Station</h1>
      </Link>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink>

            </li>
            <li><NavLink to="/computadoras">Computadoras</NavLink>

            </li>
            <li><NavLink to="/celulares">Celulares</NavLink>

            </li>
            <li><NavLink to="/fundas">Fundas</NavLink>

            </li>
          </ul>
        </nav>
      
    </header>
  )
}

export default Menu