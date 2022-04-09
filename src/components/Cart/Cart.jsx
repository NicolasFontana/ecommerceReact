import { useCartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import './cart.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";


function Cart() {

  const { cartList, vaciarCarrito, removeItem, totalCarrito, precioTotal } = useCartContext()

  const generarOrden = async (e) => {
    e.preventDefault();
    let orden = {}

    orden.buyer = {name: 'Nico', email: 'nico.fontana12@gmail.com', phone: '123131312'}
    orden.total = precioTotal()

    orden.items = cartList.map(cartProd => {
      const id = cartProd.id
      const nombre = cartProd.nombre
      const precio = cartProd.precio * cartProd.cant
      
      return {id, nombre, precio}
    })

    const db = getFirestore()
    const queryCollection = collection(db, 'orders')
    addDoc(queryCollection, orden)
    .then (({id}) => alert("Su orden de compra es la siguiente: \n" + id))
  }

  return (
    cartList.length > 0 ?
      <>
        <div>
          <div className="container py-4">
            {cartList.map(prod =>
              <div key={prod.id} className="d-flex cardx justify-content-between">
                <div className="d-flex align-items-center">
                  <img src={prod.imagen} alt="" width={"200"} />
                  <p>x{prod.cant} {prod.nombre}</p>
                </div>
                <div className="d-flex align-items-center">
                  <p>${prod.precio}</p>
                  <button className="trash" onClick={() => { removeItem(prod.id) }}><i className="fas fa-trash-alt"></i></button>
                </div>
              </div>
            )}
            <div className="d-flex cardPrecio justify-content-between">
              <div className="align-items-center">
                <p class="formasDePago"><input id="opt1" class="me-3" type="radio" name="metodoPago" />Deposito o Transferencia Bancaria</p>
                <p class="formasDePago"><input id="opt1" class="me-3" type="radio" name="metodoPago" />Mercadopago - Tarjetas Online, PagoFacil, RapiPago</p>
                <p class="formasDePago"><input id="opt1" class="me-3" type="radio" name="metodoPago" />Tarjetas Visa o MasterCard</p>
              </div>
              <div className="d-flex align-items-center">
                <p>Precio total:</p>
                <p>${totalCarrito(cartList)}</p>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button className="btnVaciar me-2" onClick={vaciarCarrito}>Vaciar carrito</button>
              <button className="btnComprar" onClick={generarOrden}>Finalizar compra</button>
            </div>
          </div>
        </div>
      </>
      :
      <>
        <div className="container text-center">
          <div className="alert alert-secondary mt-5 w-25 d-flex justify-content-center mx-auto" role="alert">
            No hay elementos en el carrito
          </div>
          <Link to='/' className="">
            <button className="btnSeguirComprando">Seguir comprando</button>
          </Link>
        </div>
      </>


  )
}

export default Cart

