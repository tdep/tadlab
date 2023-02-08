import React, { useState, useEffect, useContext } from 'react'
import { FileDropdowns } from '../features/modals/file/FileDropdowns'
import { HelpDropdowns } from '../features/modals/help/HelpDropdowns'
import { AccountDropdowns } from '../features/modals/account/AccountDropdowns'
import Cookies from 'js-cookie'
// import '../styling/Navbar.css'
import { UserContext } from '../features/modals/account/UserContext'


export const Navbar = () => {

  const handleAccountMenu = () => {
    document.getElementById("accountDropdown").classList.toggle("show")

  }

  return (
    <div className="nav-container">
      <div className="accountContainer">
        <button
          id="accountMenu"
          onClick={handleAccountMenu}
          className="dropbtn">
        </button>
        <div className="avatarContainer">
          <img id="avatar" src={false ? '../src/assets/avatar1.png' : '../src/assets/avatar_signed_out.png'} />
        </div>
        <div id="accountDropdown" className="dropdown-content">
          <AccountDropdowns/>
        </div>
      </div>
    </div>
  )
}