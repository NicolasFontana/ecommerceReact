import { useCartContext } from "../../context/CartContext"
import './cart.css'


function Cart() {

  const { cartList, vaciarCarrito, removeItem } = useCartContext()



  return (
    <div>
      <div className="container py-4">
        {cartList.map(prod =>
          <div className="d-flex cardx justify-content-between">
            <div className="d-flex align-items-center">
              <img src={require(`../../img/${prod.imagen}`)} alt="" width={"200"} />
              <p>x{prod.cant} {prod.nombre}</p>
            </div>
            <div className="d-flex align-items-center">
              <p>{prod.precio}</p>
              <button className="trash" onClick={() => { removeItem(prod.id) }}><i className="fas fa-trash-alt"></i></button>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <button className="btnVaciar me-2" onClick={vaciarCarrito}>Vaciar carrito</button>
          <button className="btnComprar">Finalizar compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart

