import React from 'react'
import { useCartContext } from "../../../context/CartContext"
import './widget.css'

function Widget() {

  const { cartList, cantidadCarrito } = useCartContext()


  return (
      <div className='d-flex align-items-center'>
        <i className='fa-solid fa-cart-shopping fa-xl carrito'></i>
        {cartList.length > 0 ? 
          <p className='contador'>{cantidadCarrito(cartList)}</p> 
          :
          <div></div>
        }
        
      </div>
  )
}

export default Widget