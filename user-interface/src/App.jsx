import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import './styling/index.css'

const App = () => {

  return(
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/userpage'} element={<UserPage />} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App