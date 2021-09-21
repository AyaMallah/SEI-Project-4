import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link href="/about">Website by Aya Mallah</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about"><i className="fab fa-facebook"></i></Nav.Link>
            <Nav.Link href="/about"><i className="fab fa-instagram"></i></Nav.Link>
            <Nav.Link href="/about"><i className="fab fa-twitter"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Footer
