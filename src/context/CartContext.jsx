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

    return (
        <CartContext.Provider value={{ 
            cartList,
            addItem,
            vaciarCarrito,
            removeItem
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
