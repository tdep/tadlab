import { useEffect, useState } from "react";
import { Sidebar } from "../components/menus/Sidebar";
import { QuickAccess } from "../components/page_components/QuickAccessHome";
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

  const openNav = () => {
    document.getElementById("sideNav").style.width = "250px";
  }

  return (
    <div className="home">
      <div id="homepageTitle" className="pageTitle">
        <div className="navbtns">
          <span onClick={openNav}>MENU</span>
        </div>
        <h1>HOME</h1>
        <h1 className="tadlab">TADLAB</h1>
      </div>
      <div id="quickAccessContainer">
        <h1>Quick Links</h1>
        <QuickAccess />
      </div>
      <Sidebar />
    </div>
  )
}

export default HomePage

