import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../../components/ItemDetail/ItemDetail"


function ItemDetailContainer() {
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    let { detalleId } = useParams()
    useEffect(()=>{
        // getFetchOne
        // .then(prod => setProducto(prod.find(item => item.id === Number(detalleId))))
        // .catch(err => console.log(err))
        // .finally ( () => setLoading(false))
        const db = getFirestore()
        const queryDoc = doc(db, 'items', detalleId)
        getDoc(queryDoc)
        .then(resp => setProducto ( { id: resp.id, ...resp.data() } ))
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
