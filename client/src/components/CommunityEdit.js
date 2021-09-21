import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const CommunityEdit = () => {
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    cover_image: '',
    description: '',
    category: '',
  })

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`/api/plants/${id}/`)
      setFormData(data)
      console.log('this is my data:', data)
    }
    getData()
  }, [id])

  const handleChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
  }

  const getTokenFromLocalStorage = () => {
    const token = window.localStorage.getItem('token')
    console.log('TOKEN', token)
    return token
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const token = getTokenFromLocalStorage()
    try {
      console.log({ formData })
      await axios.put(`/api/plants/${id}/`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      // history.push(`/api/plants/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  console.log(formData)

  return (
    <>
      <h2 className="form-title">Edit this post</h2>
      <div className="create-post-container">
        <Form onSubmit={handleSubmit} className="create-form w-50">
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
              className="choose-file"
              type="file"
              // required
              name="cover_image"
              // value={formData.cover_image}
              onChange={handleChange}
            />
            <Form.Control.Feedback
              type="invalid"
              tooltip
            ></Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="w-100">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="w-100">
            <Form.Label>Category:</Form.Label>
            <Form.Control
              as="select"
              name="category"
              onChange={handleChange}
              value={formData.category}
            >
              <option value={1}>General</option>
              <option value={2}>Help</option>
              <option value={3}>Decor</option>
            </Form.Control>
          </Form.Group>

          <div className="button">
            <Button id="post-plant" className="w-50" type="submit">
              Edit post
            </Button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default CommunityEdit
