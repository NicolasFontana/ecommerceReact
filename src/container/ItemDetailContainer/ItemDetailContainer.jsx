import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { getFetchOne } from "../../helpers/getFetch"


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    let { detalleId } = useParams()
    useEffect(()=>{
        getFetchOne
        .then(prod => setProducto(prod.find(item => item.id === Number(detalleId))))
        // .then(prod => setProducto(prod))
        .catch(err => console.log(err))
        .finally ( () => setLoading(false))
    }, [detalleId])
    return (
        <div>
          <>
            { loading ? <h2 className='d-flex justify-content-center'>Cargando...</h2> : 
              <ItemDetail producto={producto} />
            }
          </>      
        </div>
    )
}

export default ItemDetailContainer
