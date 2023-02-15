import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './app/Navbar'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import ProjectPage from './pages/ProjectPage'
import TadlabMini from './pages/TadlabMini'
import './styling/index.css'

const App = () => {

  return(
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/home'} element={<HomePage />} />
          <Route path={'/userpage'} element={<UserPage />} />
          <Route path={'/projectpage'} element={<ProjectPage />} />
          <Route path={'/tadlabmini'} element={<TadlabMini />} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App