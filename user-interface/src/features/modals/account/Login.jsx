import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"
import { loginUser } from "../loginSlice"
import '../../../styling/Modals.css'

function Login() {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })
  const [userData, setUserData] = useState({
    id: "",
    username: ""
  })

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const login = document.getElementById("login-modal")
  if (item.open && item.menuItem === "login") {
    login.style.display = "block"
  }

  const handleModalClose = (e) => {
    dispatch(closeModal({ open: false, menuItem: "" }))
    login.style.display = "none"
  }

  const handleLoginInput = (e) => {
    setLoginState({ ...loginState, [e.target.name]: e.target.value })
  }

  const setLogin = () => {
    dispatch(loginUser({ id: userData.id, username: userData.username, email: loginState.email, password: loginState.password }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const login = async () => {
      let req = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: loginState.email, 
          password: loginState.password
        })
      })
      let res = await req.json()
      if (req.ok) {
        let user = { "id": res.user.id, "username": res.user.username}
        setUserData(user) //local state
        setLogin() //redux state

        console.log("logged in:", userData)
        handleModalClose()
      } else {
        console.log(res.error)
      }
    }
    login()
  }



  return (
    <div id="login-modal" className="modal">
      <div className="modal-content animate">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img src="../../../src/assets/avatar4.png" alt="Avatar" className="avatar" />
          </div>

          <div className="container">
            <label htmlFor="uname"><b>Email</b></label>
            <input 
              type="text" 
              placeholder="Enter Email" 
              name="email" 
              value={loginState.email}
              onChange={handleLoginInput}
              required 
            />

            <label htmlFor="psw"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              value={loginState.password}
              onChange={handleLoginInput}
              required 
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