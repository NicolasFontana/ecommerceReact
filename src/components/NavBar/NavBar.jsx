import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Widget from './Widget/Widget'
import Search from './Search/Search'
import './navBar.css'

function NavBar() {
  return (
    <>
      <Navbar variant="dark" className='navBar'>
        <Container>
          <NavLink to='' className='text-decoration-none'>
            <Navbar.Brand href="#home" className='logo' id='logo'>
              <img
                alt=""
                src={require('../../img/logo.png')}
                width="30"
                height="30"
                className="d-inline-block align-center"
              />{' '}
            TecnoFox
            </Navbar.Brand>
          </NavLink>
          <Search />
          <NavLink to='cart' className='text-decoration-none'>
            <Widget />
          </NavLink>
        </Container>
      </Navbar>
</>
  )
}

export default NavBar

