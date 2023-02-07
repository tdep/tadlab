import React, { useState, useEffect, useRef} from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserContext } from "./UserContext"
import { closeModal } from "../modalSlice"
import { loginUser } from "../loginSlice"
import Cookies from "js-cookie"
import '../../../styling/Modals.css'

function Login() {
  
  const [user, setUser] = useState(null)
  const [loginOutToggle, setloginOutToggle] = useState(false)
  const form = useRef()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(form.current)
    let req = await fetch("http://127.0.0.1:3000/login", {
      method: 'POST',
      body: formData
    })
    let res = await req.json()
    console.log("Res", res)
    Cookies.set('token', res.token)
    setUser(res.user)
    handleModalClose()
    if (user) {
      setloginOutToggle(true)
    } else {
      setloginOutToggle(false)
    }
  }
  
  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const login = document.getElementById("login-modal")
  if (item.open && item.menuItem === "login") {
    login.style.display = "block"
  }

  const handleModalClose = () => {
    dispatch(closeModal({ open: false, menuItem: "" }))
    login.style.display = "none"
  }

  return (
    <div id="login-modal" className="modal">
      <div className="modal-content animate">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <form onSubmit={handleSubmit} ref={form}>
          <div className="imgcontainer">
            <img src="../../../src/assets/avatar4.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Email</b></label>
            <input 
              type="text" 
              placeholder="Enter Email" 
              name="email" 
            />

            <label htmlFor="psw"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
            />

            <button type="submit" >Log-in</button>
            {/* <label>
              <input type="checkbox" checked="checked" name="remember">Remember Me </input>
            </label> */}
          </div>

          <div className="container" style={{background:'#f1f1f1'}}>
            <button type="button" className="cancelbtn" onClick={handleModalClose}>Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>

      </div>
    </div>
  )

}

export default Login