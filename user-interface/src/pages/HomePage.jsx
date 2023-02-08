import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navbar } from "../app/Navbar";
import { MenuItem } from "../features/modals/MenuItem";
import '../../src/styling/homepage.css'

const HomePage = () => {
  const [user, setuser] = useState(null)
  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://localhost:3000/me", {
        headers: { Authorization: Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setuser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])
  
  console.log(user)
  // When the user clicks on the button, toggle between hiding 
  // and showing the dropdown content
  const handleFileMenu = () => {
    document.getElementById("fileDropdown").classList.toggle("show")
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
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

  const openNav = () => {
    document.getElementById("sideNav").style.width = "250px";
  }
  const closeNav = () => {
    document.getElementById("sideNav").style.width = "0";
  }

  const openAccount = () => {
    document.getElementById("account").style.width = "750px";
  }

  const closeAccount = () => {
    document.getElementById("account").style.width = "0";
  }

  return (
    <div className="home">
      <div id="homepageTitle" className="pageTitle">
      <span onClick={openNav}>MENU</span>
        <h1>HOME</h1>
        <h1 className="tadlab">TADLAB</h1>
      </div>
      <div id="quickAccessContainer">
        <div id="newProject">New Project</div>
        <div id="openProject">Open Project</div>
      </div>
      <div id="sideNav" className="sideNav">
        <div id="titleCard">
          <h1>TADLAB</h1>
        </div>
        <a href="javascript:void(0)" className="closeBtn" onClick={closeNav}>&times;</a>
        <a onClick={openAccount}>Account</a>
        <div id="account">
          <a href="javascript:void(0)" className="closeBtn" onClick={closeAccount}>&times;</a>
          <h1>ACCOUNT</h1>
          <div id="account-container">
            <div id="details-container">
              <div id="avatar">
                <img src={user.avatar}/>
              </div>
              <div id="details">
                <div className="detail">
                  <p>Username: {user.username} <button>edit</button></p>
                </div>
                <div className="detail">
                  <p>Email: {user.email} <button>edit</button></p>
                </div>
                <div className="detail">
                  <p>Password: {user.password} <button>edit</button></p>
                </div>
              </div>
            </div>
            <div id="account-controls">
              <div >
                <button id="manage-btn">Manage</button>
              </div>
              <div >
                <button id="logout-btn">Logout</button>
              </div>
          </div>
          </div>
        </div>
        <a >About</a>
        <a href="#">New Project</a>
        <a href="#">Open Project</a>
      </div>
    </div>
  )
}

export default HomePage

