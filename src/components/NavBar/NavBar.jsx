import { NavLink, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Widget from './Widget/Widget'
import Search from './Search/Search'

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to=''>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={require('../../img/logo.png')}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            TecnoFox
            </Navbar.Brand>
          </NavLink>
          <Search />
          <Link to='cart'>
            <Widget />
          </Link>
        </Container>
      </Navbar>
</>
  )
}

export default NavBar