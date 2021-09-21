import React from 'react'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import { getPayload } from './auth/helpers/auth'
import { useHistory } from 'react-router-dom'


const Navigation = () => {
  const history = useHistory()

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  const userIsAuthenticate = () => {
    const payload = getPayload()

    if (!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }

  userIsAuthenticate()
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" ><Image className="logo" src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1627330913/PLANT_2_tezxmr.png" roundedCircle /></Navbar.Brand>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/plantcare">PlantCARE</Nav.Link>
            <Nav.Link href="/plants">Plants</Nav.Link>
          </Nav>
          <Nav>
            {!userIsAuthenticate() ?
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
              </>
              :
              <>
                <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
              </>
            }
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navigation
