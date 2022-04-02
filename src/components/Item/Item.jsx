import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './item.css'

function Item({prod}) {
  return (
    <div className='me-4 mb-4'>
      <Link className='text-decoration-none' to={`/detalle/${prod.id}`}>
        <Card className='cardItem' key={prod.id} style={{ width: '18rem' }}>
          <Card.Img className='cardItemImg' variant="top" src={require(`../../img/${prod.imagen}`)} />
            <Card.Body>
            <Card.Title className='titleCard'>{prod.nombre}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{prod.precio}</Card.Subtitle>
          </Card.Body>
        </Card>
      </Link>
    </div>
  )}

export default Item