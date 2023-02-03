import React from 'react'
import { Link } from 'react-router-dom'
import { FileDropdowns } from '../features/modals/file/FileDropdowns'

import { Counter } from '../features/modals/Counter'
import '../styling/Navbar.css'
import { HelpDropdowns } from '../features/modals/help/HelpDropdowns'
import { AccountDropdowns } from '../features/modals/account/AccountDropdowns'

export const Navbar = () => {

  // When the user clicks on the button, toggle between hiding 
  // and showing the dropdown content
  const handleFileMenu = (e) => {
    document.getElementById("fileDropdown").classList.toggle("show")
  }

  const handleHelpMenu = (e) => {
    document.getElementById("helpDropdown").classList.toggle("show")
  }

  const handleAccountMenu = (e) => {
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
  return (
    <>
      <nav>
        <section>
          <div className="navContent">
            <div className="navMenu">
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
              <button id="helpMenu" onClick={handleHelpMenu} className="dropbtn">Help</button>
              <div id="helpDropdown" className="dropdown-content">
                <HelpDropdowns />
              </div>
              <button id="accountMenu" onClick={handleAccountMenu} className="dropbtn">Account</button>
              <div id="accountDropdown" className="dropdown-content">
                <AccountDropdowns />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  )
}