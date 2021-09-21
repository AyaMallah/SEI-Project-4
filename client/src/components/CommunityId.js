import React, { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { getPayload } from './auth/helpers/auth'

const CommunityId = () => {
  const history = useHistory()
  const [plant, setPlant] = useState({})
  const { id } = useParams()
  const commentsArray = plant.comments
  console.log({ commentsArray })

  const [formData, setFormData] = useState({
    comment: '',
  })

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/plants/${id}`)
        setPlant(data)
        console.log({ data })
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [id])

  const userIsAuthenticate = () => {
    const payload = getPayload()

    if (!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }
  userIsAuthenticate()

  const userIsOwner = (userId) => {
    console.log({ userId })
    const payload = getPayload()
    console.log({ payload })
    if (!payload) return false
    return userId === payload.sub
  }

  const getTokenFromLocalStorage = () => {
    const token = window.localStorage.getItem('token')
    console.log('TOKEN', token)
    return token
  }

  const handleDelete = async () => {
    const token = getTokenFromLocalStorage()
    try {
      console.log({ id })
      await axios.delete(`/api/plants/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      history.push('/plants')
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteComment = async (commentId) => {
    const token = getTokenFromLocalStorage()
    try {
      console.log({ commentId })
      await axios.delete(`/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (err) {
      console.log(err)
    }

  }

  const handleChange = (event) => {
    const newFormData = { ...formData, [event.target.name]: event.target.value }
    setFormData(newFormData)
  }

  const handleSubmit = () => {
    const commentData = {
      text: formData.comment,
      plant: id,
    }
    const token = getTokenFromLocalStorage()

    try {
      axios.post('/api/comments/', commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setFormData({
        comment: '',
      })
    } catch (err) {
      console.log(err)
    }
  }

  console.log({ formData })

  return (
    <>
      <div className="back-to-plants">
        <Link to="/plants/">
          <Button id="back-button">Go back</Button>
        </Link>
      </div>
      <div key={plant} className="post-container">
        <div className="post-title">
          <h1 id="title-post">{plant.title}</h1>
        </div>
        <div className="post-image">
          <img className="w-75" src={plant.cover_image} />
        </div>
        <div className="post-description">
          <p>{plant.description}</p>
        </div>
        <div>
          {plant.comments &&
            plant.comments.map((comment) => {
              return (
                <div key={comment.id} className="comment-card">
                  <div>
                    <img src="{comment.owner.profile_image}" />
                    <p>{comment.owner.username}</p>
                  </div>
                  <div>{comment.text}</div>
                  {userIsOwner(comment.owner?.id) &&
                    <div><Button id="delete" onClick={() => handleDeleteComment(comment.id)}>X</Button></div>
                  }
                </div>
              )
            })}
        </div>
        {
          userIsAuthenticate() ? (
            <div className="comment-add">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="w-100">
                  <Form.Control
                    name="comment"
                    as="textarea"
                    placeholder="Type comment"
                    value={formData.comment}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button id="comment" type="submit">
                  Comment
                </Button>
              </Form>
            </div>
          ) : (
            <div></div>
          )
        }
      </div>
      <hr />
      <div>
        {userIsOwner(plant.owner?.id) && (
          <div className="buttons">
            <Link to={`/plants/${id}/edit/`}>
              <Button className="post">Edit post</Button>
            </Link>
            <Button onClick={handleDelete} className="post">
              Delete post
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
export default CommunityId
