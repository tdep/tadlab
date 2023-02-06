import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import { MenuItem } from './features/modals/MenuItem'
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