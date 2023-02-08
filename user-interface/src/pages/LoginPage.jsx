import { useEffect, useRef, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import '../../src/styling/loginpage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(form.current)
    let req = await fetch("http://127.0.0.1:3000/login", {
      method: 'POST',
      body: formData
    })
    let res = await req.json()
    if (req.ok) {
      console.log(res.user)
      Cookies.set('token', res.token)
      setUser(res.user)
      navigate("/home")
    }
  }
  return (
    <div>
      <div id="login-card">
        <div id="login-container" className="container">
          <div id="imgcontainer">
            <img src="../../../src/assets/avatar4.png" alt="Avatar" className="avatar" />
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} ref={form}>

              <div className="container">
                <label htmlFor="email"><b>Email</b></label>
                <input
                  id="login-email"
                  className="login-input"
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                />

                <label htmlFor="password"><b>Password</b></label>
                <input 
                  id="login-password"
                  className="login-input"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                />

                <button type="submit" id="login-btn"><b>Log-in</b></button>
                <button type="button" id="register-btn"><b>Register</b></button>
              </div>
              {/* <div className="container" style={{background: '#f1f1f1'}}> */}
                <span id="forgot-password"><b>Forgot <a href="#">password?</a></b></span>
              {/* </div> */}
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage