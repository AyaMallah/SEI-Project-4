import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getPayload } from './auth/helpers/auth'

const Community = () => {
  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchMode, setIsSearchMode] = useState(false)
  const [categorySelected, setCategorySelected] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/plants')
        setPlants(data)
        setSearchResults(data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  const handleSearch = (e) => {
    setIsSearchMode(true)
    e.preventDefault()
    const filteredPlants = plants.filter((plant) =>
      plant.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    setSearchResults(filteredPlants)
  }

  const handleClear = (e) => {
    e.preventDefault()
    setSearchResults(plants)
    setIsSearchMode(false)
    setSearchValue('')
  }

  const handleCategory = (categoryNum) => {
    if (categoryNum === 1) {
      setCategorySelected('General')
    } else if (categoryNum === 2) {
      setCategorySelected('Help')
    } else {
      setCategorySelected('Decor')
    }

    const filteredCategory = plants.filter(
      (plant) => plant.category === categoryNum
    )
    setSearchResults(filteredCategory)
  }

  const userIsAuthenticate = () => {
    const payload = getPayload()

    if (!payload) return
    const currentTime = Math.round(Date.now() / 1000)
    return currentTime < payload.exp
  }

  userIsAuthenticate()

  console.log({ categorySelected })
  return (
    <>
      <h1>Plants</h1>
      <div>
        <Form className="d-flex search-form">
          <Form.Control
            className="w-50"
            placeholder="Search anything..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {isSearchMode ? (
            <Button id="search" className="w-20" onClick={handleClear}>
              Clear
            </Button>
          ) : (
            <Button
              id="search"
              className="w-20"
              type="submit"
              onClick={handleSearch}
            >
              Search
            </Button>
          )}
        </Form>
        <div className="filter d-flex">
          <h4>Choose a category:</h4>
          <div className="categories">
            <p onClick={() => handleCategory(1)} className={`categorySelector-${categorySelected === 'General' ? 'active' : ''}`}>General</p>
            <p onClick={() => handleCategory(2)} className={`categorySelector-${categorySelected === 'Help' ? 'active' : ''}`}>Help</p>
            <p onClick={() => handleCategory(3)} className={`categorySelector-${categorySelected === 'Decor' ? 'active' : ''}`}>Decor</p>
          </div>
        </div>
      </div>
      {userIsAuthenticate() ? (
        <div className="create-post">
          <Link to="/plants/new/">
            <Button id="create">Create Plant Post 🌱</Button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
      <hr />
      <div className="grid-container">
        {searchResults.map((plant) => {
          return (
            <div key={plant.id} className="grid-item">
              <Link to={`/plants/${plant.id}`}>
                <div className="plant-title">
                  <h3>{plant.title}</h3>
                </div>
              </Link>
              <Link to={`/plants/${plant.id}`}>
                <div className="plant-image">
                  <img className="w-75" src={plant.cover_image} />
                </div>
              </Link>
              <div className="plant-description">
                <p>{plant.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Community
