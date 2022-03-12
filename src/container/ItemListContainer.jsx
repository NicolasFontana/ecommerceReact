import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import ItemCount from '../components/ItemCount/ItemCount'

const stockProductos = [
  {id: 1, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 SUPER 6GB GDDR6 AMP Edition', stock: 4, precio: '$110.000', imagen: 'Zotac1660S.jpg'},
  {id: 2, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce GTX 1660 6GB GDDR5 Dual Fan', stock: 2, precio: '$84.000', imagen: 'Zotac1660.jpg'},
  {id: 3, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 12GB GDDR6 Twin Fan', stock: 10, precio: '$120.000', imagen: 'ZotacRTX2060.jpg'},
  {id: 4, categoria: 'gpu', nombre: 'Placa de Video Zotac GeForce RTX 2060 6GB GDDR6 Black', stock: 8, precio: '$130.000', imagen: 'ZotacRTX2060Black.jpg'}
]

const gFetch = new Promise ( (resolve, reject) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      resolve(stockProductos)
    }, 3000);
  } else {
    reject ('404 - not found')
  }
})

function ItemListContainer({ greeting }) {
  const [prods, setProds] = useState ([])

  useEffect( () => {
    gFetch
    .then(rta => setProds(rta))
    .catch(error => console.log(error))
    .finally( () => console.log('ultimo'))
  }, [])

  console.log(prods)

  return (
    <>
    <div className='d-flex justify-content-center'>{greeting}</div>
    {prods.map((prod) => <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={require(`../img/${prod.imagen}`)} />
                            <Card.Body>
                              <Card.Title>{prod.nombre}</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">{prod.precio}</Card.Subtitle>
                              <ItemCount initial={ 1 } stock= { prod.stock }></ItemCount>
                            </Card.Body>
                          </Card>
)}
    </>
  )
}

export default ItemListContainer