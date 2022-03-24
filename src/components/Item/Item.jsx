import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Item({prod}) {
  return (
    <div className='me-4 mb-4'>
      <Link to={`/detalle/${prod.id}`}>
        <Card key={prod.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require(`../../img/${prod.imagen}`)} />
            <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{prod.precio}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )}

export default Item