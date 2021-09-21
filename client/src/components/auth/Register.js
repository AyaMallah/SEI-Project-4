import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router'
import axios from 'axios'

const Register = () => {
  const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const [errors, setErrors] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    profile_image: '',
  })

  const handleUserData = (e) => {
    console.log('e.target.value', e.target.value)
    console.log('formData', formData.username)

    const getUserData = { ...formData, [e.target.name]: e.target.value }

    console.log('getUserData', getUserData)
    const newErrors = { ...errors, [e.target.name]: '' }
    setFormData(getUserData)
    setErrors(newErrors)
  }

  const submitForm = async (e) => {
    e.preventDefault()

    console.log('formData at sumbit time', formData)

    try {
      await axios.post('/api/auth/register/', formData)
      history.push('/login')
      console.log('Yayy, ou have succesfully registered!')
    } catch (err) {
      console.log(err)
      setErrors(err.response.data.errors)
      console.log('Oops something went wrong!')
    }
  }

  return (
    <>
      <div className="register-page">
        <h1>Register</h1>
        <Form onSubmit={submitForm} className="register-container w-50">
          <div className="register-form">
            <Form.Group controlId="username" className="w-100">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                name="username"
                type="text"
                placeholder="Enter username"
                value={formData.username}
                onChange={handleUserData}
              />
            </Form.Group>
            < Form.Group controlId="first-name" className="w-100" >
              <Form.Label>First name:</Form.Label>
              <Form.Control
                name="first_name"
                type="text"
                placeholder="Enter first name"
                value={formData.first_name}
                onChange={handleUserData}
              />
            </Form.Group >
            < Form.Group controlId="last-name" className="w-100" >
              <Form.Label>Last name:</Form.Label>
              <Form.Control
                name="last_name"
                type="text"
                placeholder="Enter last name"
                value={formData.last_name}
                onChange={handleUserData}
              />
            </Form.Group >
            <Form.Group controlId="email" className="w-100">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="text"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleUserData}
              />
            </Form.Group>
            <Form.Group controlId="password" className="w-100">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                name="password"
                type="password" placeholder="Enter password"
                value={formData.password}
                onChange={handleUserData}
              />
            </Form.Group>
            <Form.Group controlId="confirmPassword" className="w-100">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                name="password_confirmation"
                type="password" placeholder="Enter password confirmation"
                value={formData.password_confirmation}
                onChange={handleUserData}
              />
            </Form.Group>
            <Form.Group className="w-100">
              <Form.Label>Profile image:</Form.Label>
              <br />
              <Form.Control
                className="choose-file"
                type="file"
                // required
                name="profile_image"
                value={formData.profile_image}
                onChange={handleUserData}
              />
              <Form.Control.Feedback
                type="invalid"
                tooltip
              ></Form.Control.Feedback>
            </Form.Group>

            <Button id="sign-up" className="w-50" type="submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default Register


