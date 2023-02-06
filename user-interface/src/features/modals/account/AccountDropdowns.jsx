import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import { isLoggedIn } from './Login'

import '../../../styling/Modals.css'

export function AccountDropdowns() {

  const dispatch = useDispatch()

  const handleModalOpen = (e) => {
    let menuItem = e.target.id
    dispatch(openModal({ open: true, menuItem: menuItem }))

  }

  return (
    <>
      {isLoggedIn?
        <a id="login" className="menu-item" onClick={handleModalOpen}>Logout</a>:
        <a id="login" className="menu-item" onClick={handleModalOpen}>Login</a>
      }
      <br />
      <a id="register" className="menu-item" onClick={handleModalOpen}>Register</a>
    </>
  )
}