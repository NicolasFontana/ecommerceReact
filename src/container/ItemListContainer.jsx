import React from 'react'
import { useState, useEffect } from 'react'
import {gFetch} from '../helpers/getFetch'
import ItemList from '../components/ItemList/ItemList'

function ItemListContainer({ greeting }) {
  const [prods, setProds] = useState ([])

  useEffect( () => {
    gFetch
    .then(rta => setProds(rta))
    .catch(error => console.log(error))
    .finally( () => console.log('ultimo'))
  }, [])

  return (
    <>
      <div className='d-flex justify-content-center'>{greeting}</div>
      <ItemList prods={prods}/>
    </>
  )
}

export default ItemListContainer