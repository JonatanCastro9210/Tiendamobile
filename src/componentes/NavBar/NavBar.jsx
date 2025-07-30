import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <header>
        <h1>Mobile Station</h1>

        <nav>
            <ul>
                <li>iPhone</li>
                <li>Samsungs</li>
                <li>Motorola</li>
            </ul>
        </nav>


        <CartWidget/>
    </header>
    
  )
}
export default NavBar