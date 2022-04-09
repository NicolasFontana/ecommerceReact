import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function ItemListContainer() {
  const [prods, setProds] = useState ([])
  const [ loading, setLoading ] = useState(true)
  const { categoria } = useParams()

  useEffect( () => {
    const db = getFirestore()
    const queryCollection = collection (db, 'items')
    if (categoria) {
      const queryFilter = query(queryCollection, where ('categoria', '==', categoria))
      getDocs(queryFilter)
      .then(resp => setProds(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally( () => setLoading(false))
    } else {
      getDocs(queryCollection)
      .then(resp => setProds(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally( () => setLoading(false))
    }
  }, [categoria])

  console.log(prods)
  return (
    <div className='containerItems'>
      { loading ? <h2 className='d-flex justify-content-center'>Cargando...</h2> : 
      <div className='d-flex flex-wrap justify-content-start col-10 mx-auto my-5'><ItemList prods={prods}/></div>
      }
    </div>
  )
}

export default ItemListContainer