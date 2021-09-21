import React, { useState } from 'react'
import { Form, Button, Image } from 'react-bootstrap'
import { useHistory } from 'react-router'
import axios from 'axios'


const Login = () => {
  const history = useHistory()
  console.log('History', history)
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newLoginData = { ...loginData, [event.target.name]: event.target.value }
    setloginData(newLoginData)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token)
    console.log('TOKEN', token)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    console.log({ loginData })
    try {
      const { data } = await axios.post('/api/auth/login/', loginData)
      console.log(data)
      console.log(loginData)
      setTokenToLocalStorage(data.token)
      history.push('/community')
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <>
      <div className="login-page">
        <div>
          <h1>Login</h1>
          <Form onSubmit={submitForm} className="login-container w-50">
            <div className="login-form">
              <Form.Group className="w-100" controlId="formBasicEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control name="email" value={loginData.email} type="email" placeholder="Enter email" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="w-100" controlId="formBasicPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control name="password" value={loginData.password} type="password" placeholder="Password" onChange={handleChange} />
              </Form.Group>
              <Button id="login" className="w-25" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
        <div className="login-image"><Image src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1627399352/photo-1607604971893-e4a9535a8ca2_zaq8da.jpg" /></div>
      </div>

    </>
  )
}
export default Login
