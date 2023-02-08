import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import Cookies from 'js-cookie'

// import '../../../styling/Modals.css'
import { Link } from 'react-router-dom'

export function AccountDropdowns() {
  const dispatch = useDispatch()
  const handleModalOpen = (e) => {
    let menuItem = e.target.id
    dispatch(openModal({ open: true, menuItem: menuItem }))

  }

  const logout = () => {
    Cookies.remove('token')
    // setUser(null)
  }

  return (
    <>
      <Link to={"/login"}><a id="logout" className="menu-item" onClick={logout}>Logout</a></Link>
      <Link to={"/userpage"}><a id="userpage" className="menu-item" onClick={handleModalOpen}>User Settings</a></Link>
    </>
  )
}