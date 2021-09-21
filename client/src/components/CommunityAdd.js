import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const CommunityAdd = () => {
  const history = useHistory()
  const [formData, setFormData] = useState({
    title: '',
    cover_image: '',
    description: '',
    category: '',
  })

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const getTokenFromLocalStorage = () => {
    const token = window.localStorage.getItem('token')
    console.log('TOKEN', token)
    return token
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log({ formData })
    const token = getTokenFromLocalStorage()
    try {
      await axios.post('/api/plants/',
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      history.push('/plants')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h2 className="form-title">Create a post</h2>
      <div className="create-post-container">
        <Form className="create-form w-50" onSubmit={handleSubmit}>
          <Form.Group className="w-100">
            <Form.Label>Title:</Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>Image:</Form.Label>
            <br />
            <Form.Control
              className="input"
              type="file"
              name="cover_image"
              value={formData.cover_image}
              onChange={handleChange}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          < Form.Group className="w-100" >
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group >
          <Form.Group className="w-100">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" name="category" onChange={handleChange}>
              <option value={null}>Select one</option>
              <option value={1}>General</option>
              <option value={2}>Help</option>
              <option value={3}>Decor</option>
            </Form.Control>
          </Form.Group>

          <div className="button">
            <Button id="post-plant" className="w-50" type="submit">
              Post plant
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default CommunityAdd
