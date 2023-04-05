import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { closeModal } from "../modalSlice"
import store from "../../../app/store"
// import '../../../styling/Modals.css'

const allState = store.getState()

function Register() {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  })

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const register = document.getElementById("register-modal")
  if (item.open && item.menuItem === "register") {
    register.style.display = "block"
  }

  const handleRegisterInput = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
    console.log(registerData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const registration = async () => {
      let req = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: registerData.username,
          email: registerData.email,
          password: registerData.password
        })
      })
      let res = await req.json()
      if (req.ok) {
        setRegisterData(res)
        handleModalClose()
      } else {
        console.log(res.error)
      }
    }
    registration()
  }


  const handleModalClose = (e) => {
    dispatch(closeModal({ open: false, menuItem: "" }))
    register.style.display = "none"
  }

  return (
    <div id="register-modal" className="modal">
      <div className="modal-content animate">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account</p>
            <hr />

            <label htmlFor="email"><b>Username</b></label>
            <input 
              type="text" 
              placeholder="Enter Username" 
              name="username" 
              value={registerData.username}
              onChange={handleRegisterInput}
              id="username" 
              required 
            />

            <label htmlFor="email"><b>Email</b></label>
            <input 
              type="text" 
              placeholder="Enter Email" 
              name="email" 
              value={registerData.email}
              onChange={handleRegisterInput}
              id="email" 
              required 
            />

            <label htmlFor="psw"><b>Password</b></label>
            <input 
              type="password" 
              placeholder="Enter Password" 
              name="password" 
              value={registerData.password}
              onChange={handleRegisterInput}
              id="password" 
              required 
            />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input 
              type="password" 
              placeholder="Repeat Password" 
              name="passwordConfirm"
              value={registerData.passwordConfirm} 
              onChange={handleRegisterInput}
              id="passwordConfirm" 
              required 
            />

            <p>By creating an account you agree to something. idk what though.</p>
            <button type="submit" className="registerbtn">Register</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Register