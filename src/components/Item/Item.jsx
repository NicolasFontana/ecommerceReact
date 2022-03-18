import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'

const onAdd = (count) => {
  console.log(count)
}

function Item({prod}) {
  return (
    <>
      <Card key={prod.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../../img/${prod.imagen}`)} />
          <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{prod.precio}</Card.Subtitle>
          <ItemCount initial={ 1 } stock= { prod.stock } onAdd= { onAdd }></ItemCount>
        </Card.Body>
      </Card>
    </>
  )}

export default Item