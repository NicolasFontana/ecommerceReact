import {useState} from 'react'
import { Button } from 'react-bootstrap'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [ count, setCount ] = useState(initial)

    const sumar = () => {
        if (count < stock) {
            setCount( count + 1 )
        }
    }
    const restar = () => {
        if (count > initial) {
            setCount( count - 1 )
        }
    }

    const agregar = () => {
        onAdd(count)
    }
    

    return (
        <div>
            {stock < 1 ? <p className='text-dark fs-4'><strong>Sin stock</strong></p> : 
            <>
                <Button variant="primary" onClick={ agregar } className='me-3'>Agregar al carrito</Button>
                <button type="button" className='btn btn-outline-primary btn-sm' onClick={restar}> - </button> 
                <label className='mx-1'> { count } </label>
                <button type="button" className='btn btn-outline-primary btn-sm' onClick={sumar}> + </button>
            </>
            }
        </div>
    )
}

export default ItemCount
