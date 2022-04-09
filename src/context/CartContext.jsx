import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    const addItem=(item)=>{
        const esDuplicado = cartList.find ( prod => prod.id === item.id  )
        if (esDuplicado === undefined) { 
            setCartList( [ ...cartList, item ] )
            
        } else {
            const index = cartList.findIndex ( prod => prod.id === item.id)
            setCartList ( [...cartList ])
            cartList[index].cant = cartList[index].cant + item.cant
        }
    }
    
    const vaciarCarrito = () => {
        setCartList([])
    }

    function removeItem (prodId)  {
        const item = cartList.find ( prod => prod.id === prodId)
        const index = cartList.indexOf(item)
        cartList.splice(index, 1)
        setCartList([...cartList])
    }

    function totalCarrito (cartList) {
        let precioTotal = 0
        cartList.forEach(prod => 
            precioTotal += prod.cant * prod.precio
            )
        return precioTotal
    }

    function cantidadCarrito (cartList) {
        let contador = 0
        cartList.forEach(prod => 
            contador += prod.cant
            )
        return contador
    }

    const precioTotal = () => {
        return cartList.reduce ((acum, prod) => acum + (prod.cant * prod.precio), 0)
    }

    return (
        <CartContext.Provider value={{ 
            cartList,
            addItem,
            vaciarCarrito,
            removeItem,
            totalCarrito,
            cantidadCarrito,
            precioTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
