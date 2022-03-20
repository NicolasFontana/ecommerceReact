import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import {NavLink} from 'react-router-dom'


function Categories() {
  return (
          <>
            <Navbar bg="dark" expand="lg" variant='dark'>
              <Container>
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center'>
                  <Nav className="m-auto gap-5">
                    <NavDropdown title="Insumos de minería" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Insumos de computación" id="basic-nav-dropdown">
                      <NavLink to='categoria/gpu'><NavDropdown.Item href="#action/3.1">Placas de video</NavDropdown.Item></NavLink>
                      <NavLink to='categoria/fuente'><NavDropdown.Item href="#action/3.2">Fuente de alimentación</NavDropdown.Item></NavLink>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#asic">ASIC mineros</Nav.Link>
                    <Nav.Link href="#rig">RIG mineros</Nav.Link>
                    <Nav.Link href="#preguntasFrecuentes">Preguntas frecuentes</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>

  )
}

export default Categories