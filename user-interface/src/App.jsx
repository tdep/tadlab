import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { MenuItem } from './features/modals/MenuItem'
import store from './app/store'
import './styling/index.css'

const allState = store.getState()
export const isLoggedIn = allState.login.value.loggedIn

const App = () => {

  return(
    <Router>
      <Navbar />
      <div className="App">
        <MenuItem />
    
      </div>
    </Router>
  )
}

export default App