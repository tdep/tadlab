import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { MenuItem } from './features/modals/MenuItem'
import Login from './features/modals/account/Login'
import './styling/index.css'

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