import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import Cookies from 'js-cookie'

import '../../../styling/Modals.css'

export function AccountDropdowns({user, setUser}) {
  const dispatch = useDispatch()
  const handleModalOpen = (e) => {
    let menuItem = e.target.id
    dispatch(openModal({ open: true, menuItem: menuItem }))

  }

  const logout = () => {
    Cookies.remove('token')
    setUser(null)
  }

  return (
    <>
      {false?
        <a id="logout" className="menu-item" onClick={logout}>Logout</a>:
        <a id="login" className="menu-item" onClick={handleModalOpen}>Login</a>
      }
      <br />
      <a id="register" className="menu-item" onClick={handleModalOpen}>Register</a>
    </>
  )
}