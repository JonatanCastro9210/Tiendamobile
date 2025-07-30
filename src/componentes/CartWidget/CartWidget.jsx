import "./CartWidget.css";

export const CartWidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/618/1013/png-transparent-shopping-cart-online-shopping-empty-cart-angle-logo-shopping-centre.png"
  return (
    <div>
        <img className src="{imgCarrito}" alt="Imagen del carrito" />
    </div>
  )
}
export default CartWidget
