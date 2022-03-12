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
        console.log(count)
    }
    

    return (
        <div>
            <button onClick={restar}> - </button>
            <label> { count } </label>
            <button onClick={sumar}> + </button><br />
            <Button variant="primary" onClick={ agregar } >Comprar</Button>
        </div>
    )
}

export default ItemCount
