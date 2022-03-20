import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const onAdd = (count) => {
  console.log(count)
}

function Item({prod}) {
  return (
    <>
    <Link to={`detalle/${prod.id}`}>
      <Card key={prod.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../../img/${prod.imagen}`)} />
          <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{prod.precio}</Card.Subtitle>
          <ItemCount initial={ 1 } stock= { prod.stock } onAdd= { onAdd }></ItemCount>
          <Button className='mt-3' variant="primary" >Detalle</Button>{' '}
        </Card.Body>
      </Card>
    </Link>
    </>
  )}

export default Item