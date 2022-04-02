import React from 'react'
import { useState, useEffect } from 'react'
import {gFetch} from '../helpers/getFetch'
import ItemList from '../components/ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

function ItemListContainer() {
  const [prods, setProds] = useState ([])
  const [ loading, setLoading ] = useState(true)
  const { categoria } = useParams()
  useEffect( () => {
    if (categoria) {
      gFetch
      .then(rta => setProds(rta.filter(prod => prod.categoria === categoria)))
      .catch(error => console.log(error))
      .finally( () => setLoading(false))
    } else {
      gFetch
      .then(rta => setProds(rta))
      .catch(error => console.log(error))
      .finally( () => setLoading(false))
    }
  }, [categoria])
  return (
    <div className='containerItems'>
      { loading ? <h2 className='d-flex justify-content-center'>Cargando...</h2> : 
      <div className='d-flex flex-wrap justify-content-start col-10 mx-auto my-5'><ItemList prods={prods}/></div>
      }
    </div>
  )
}

export default ItemListContainer