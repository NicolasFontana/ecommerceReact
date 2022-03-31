import { useCartContext } from "../../context/CartContext"


function Cart() {

  const { cartList, vaciarCarrito } = useCartContext()


  return (
    <div>
      { cartList.map(prod => <li>nombre: {prod.nombre} cantidad: {prod.stock} precio: {(prod.precio)}</li>)}
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default Cart