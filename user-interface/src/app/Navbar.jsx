import React, { useState, useEffect } from 'react'
import { FileDropdowns } from '../features/modals/file/FileDropdowns'
import { HelpDropdowns } from '../features/modals/help/HelpDropdowns'
import { AccountDropdowns } from '../features/modals/account/AccountDropdowns'
import Cookies from 'js-cookie'
import '../styling/Navbar.css'


export const Navbar = () => {
  const [user, setUser] = useState(null)

  // When the user clicks on the button, toggle between hiding 
  // and showing the dropdown content
  const handleFileMenu = () => {
    document.getElementById("fileDropdown").classList.toggle("show")
  }

  const handleHelpMenu = () => {
    document.getElementById("helpDropdown").classList.toggle("show")
  }

  const handleAccountMenu = () => {
    document.getElementById("accountDropdown").classList.toggle("show")

  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://127.0.0.1:3000/me", {
        headers: { Authorization: Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])

  
  return (
    <>
      <nav>
        <section>
          <div className="navContent">
            <div className="navMenu">
              <div className="fileContainer">
                <button id="fileMenu" onClick={handleFileMenu} className="dropbtn">File</button>
                <div id="fileDropdown" className="dropdown-content">
                  <FileDropdowns />
                  <hr/>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round">☀️ 🌙</span>
                    <p></p>
                  </label>   
                </div>
              </div>
              <div className="helpContainer">
                <button id="helpMenu" onClick={handleHelpMenu} className="dropbtn">Help</button>
                <div id="helpDropdown" className="dropdown-content">
                  <HelpDropdowns />
                </div>
              </div>
              <div className="accountContainer">
                <button 
                  id="accountMenu" 
                  onClick={handleAccountMenu} 
                  className="dropbtn">
                  Account 
                </button>
                <div className="avatarContainer">
                  <img id="avatar" src={false ? '../src/assets/avatar1.png' : '../src/assets/avatar_signed_out.png'} />
                </div>
                <div id="accountDropdown" className="dropdown-content">
                  <AccountDropdowns 
                    user={user}
                    setUser={setUser}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}