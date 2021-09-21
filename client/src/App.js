import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import PlantCare from './components/PlantCare'
import About from './components/About'
import Community from './components/Community'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import CommunityId from './components/CommunityId'
import CommunityAdd from './components/CommunityAdd'
import CommunityEdit from './components/CommunityEdit'


const App = () => {

  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/plants/new">
          <CommunityAdd />
        </Route>
        <Route path="/plants/:id/edit">
          <CommunityEdit />
        </Route>
        <Route path="/plants/:id">
          <CommunityId />
        </Route>
        <Route path="/plants">
          <Community />
        </Route>
        <Route path="/plantCare">
          <PlantCare />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
