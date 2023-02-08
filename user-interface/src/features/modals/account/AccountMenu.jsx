import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import Cookies from 'js-cookie'
import '../../../../src/styling/Navbar.css'

import { Link } from 'react-router-dom'

export function AccountMenu() {
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
    <div id="account-div">
      <Link to={"/login"}><a id="logout"  onClick={logout}>Logout</a></Link>
      <Link to={"/userpage"}><a id="userpage"  onClick={handleModalOpen}>User Settings</a></Link>
    </div>
  )
}