import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Navbar } from "../app/Navbar";
import { MenuItem } from "../features/modals/MenuItem";

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

  const handleHelpMenu = () => {
    document.getElementById("helpDropdown").classList.toggle("show")
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

  return (
    <>
        <div>
          <MenuItem />
        </div>
    </>
  )
}

export default HomePage

