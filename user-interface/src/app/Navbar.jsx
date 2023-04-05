import React, { useState, useEffect, useContext } from 'react'
import { AccountMenu } from '../features/modals/account/AccountMenu'
import Cookies from 'js-cookie'
import '../styling/Sidebar.css'



export const Navbar = () => {
  const openNav = (e) => {
    console.log(e)
    
  }

  const closeNav = () => {

  }

  return (
    <div>
      <div id="accountContainer" className="sidebar-link-container" >
        <button className="sidebar-button" onClick={openNav}>Account</button>
        <div id="account" className="sidebar-window">
          <AccountMenu />
        </div>
      </div>
      <div id="aboutContainer" className="sidebar-link-container" onClick={openNav()}>
        <button className="sidebar-button">About</button>
      </div>
      <div id="newProjectContainer" className="sidebar-link-container" onClick={openNav()}>
        <button className="sidebar-button">New Project</button>
      </div>
      <div id="openProjectContainer" className="sidebar-link-container" onClick={openNav()}>
        <button className="sidebar-button">Open Project</button>
      </div>
    </div>
  )
}