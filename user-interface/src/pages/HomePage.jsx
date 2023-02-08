import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import '../../src/styling/homepage.css'

const HomePage = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://localhost:3000/me", {
        headers: { Authorization: Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
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

  const logout = () => {
    Cookies.remove('token')
    navigate("/login")
    setUser(null)
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

  const openAbout = () => {
    document.getElementById("about").style.width = "750px";
  }

  const closeAbout = () => {
    document.getElementById("about").style.width = "0";
  }

  const openNew = () => {
    document.getElementById("new").style.width = "750px";
  }

  const closeNew = () => {
    document.getElementById("new").style.width = "0";
  }

  const openOpen = () => {
    document.getElementById("open").style.width = "750px";
  }

  const closeOpen = () => {
    document.getElementById("open").style.width = "0";
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
        <div id="account" className="menu-card">
          <a href="javascript:void(0)" className="closeBtn" onClick={closeAccount}>&times;</a>
          <h1>ACCOUNT</h1>
          <div id="account-container">
            <div id="details-container">
              <div id="avatar">
                <img src="#" />user.avatar
              </div>
              <div id="details">
                <div className="detail">
                  <p>Username: user.username <button>edit</button></p>
                </div>
                <div className="detail">
                  <p>Email: user.email <button>edit</button></p>
                </div>
                <div className="detail">
                  <p>Password: user.password <button>edit</button></p>
                </div>
              </div>
            </div>
            <div id="account-controls">
              <div >
                <button id="manage-btn">Manage</button>
              </div>
              <div >
                <button id="logout-btn" onClick={logout}>Logout</button>
              </div>
          </div>
          </div>
        </div>
        <a onClick={openAbout}>About</a>
          <div id="about" className="menu-card">
            <a href="javascript:void(0)" className="closeBtn" onClick={closeAbout}>&times;</a>
            <h1>ABOUT</h1>
            <div id="about-container" className="menu-card-container">
              <div id="details-container">
                <div id="tad">
                  <div id="tad-img">
                    <img src="../src/assets/avatar6.png" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam elit, 
                    rutrum quis dolor vel, porttitor dignissim nisl. Mauris quis pellentesque justo, 
                    ac mattis purus. Maecenas finibus velit malesuada, lobortis elit eget, hendrerit enim. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque lectus 
                    quis mauris pulvinar, sodales consequat mauris elementum. Cras non sapien felis. 
                    In vitae tortor sit amet orci venenatis porta ac laoreet nulla. Phasellus hendrerit 
                    nunc ut auctor pellentesque. Proin sit amet sem porttitor, semper quam nec, tincidunt 
                    ante. Praesent odio felis, varius a diam sed, lacinia egestas ipsum.</p>
                </div>
              </div>
              <div id="links-container">
                <a href="#">Synths</a>
                <a href="#">Tone.js</a>
              </div>
            </div>
          </div>
        <a onClick={openNew}>New Project</a>
          <div id="new" className="menu-card">
            <a href="javascript:void(0)" className="closeBtn" onClick={closeNew}>&times;</a>
            <h1>NEW PROJECT</h1>
            <div id="new-container" className="menu-card-container">
              <div id="details-container">
                <div id="tad">
                  <div id="tad-img">
                    <img src="../src/assets/avatar6.png" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam elit,
                    rutrum quis dolor vel, porttitor dignissim nisl. Mauris quis pellentesque justo,
                    ac mattis purus. Maecenas finibus velit malesuada, lobortis elit eget, hendrerit enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque lectus
                    quis mauris pulvinar, sodales consequat mauris elementum. Cras non sapien felis.
                    In vitae tortor sit amet orci venenatis porta ac laoreet nulla. Phasellus hendrerit
                    nunc ut auctor pellentesque. Proin sit amet sem porttitor, semper quam nec, tincidunt
                    ante. Praesent odio felis, varius a diam sed, lacinia egestas ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        <a onClick={openOpen}>Open Project</a>
          <div id="open" className="menu-card">
            <a href="javascript:void(0)" className="closeBtn" onClick={closeOpen}>&times;</a>
            <h1>OPEN PROJECT</h1>
            <div id="open-container" className="menu-card-container">
              <div id="details-container">
                <div id="tad">
                  <div id="tad-img">
                    <img src="../src/assets/avatar6.png" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam elit,
                    rutrum quis dolor vel, porttitor dignissim nisl. Mauris quis pellentesque justo,
                    ac mattis purus. Maecenas finibus velit malesuada, lobortis elit eget, hendrerit enim.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque lectus
                    quis mauris pulvinar, sodales consequat mauris elementum. Cras non sapien felis.
                    In vitae tortor sit amet orci venenatis porta ac laoreet nulla. Phasellus hendrerit
                    nunc ut auctor pellentesque. Proin sit amet sem porttitor, semper quam nec, tincidunt
                    ante. Praesent odio felis, varius a diam sed, lacinia egestas ipsum.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HomePage

