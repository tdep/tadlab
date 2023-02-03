import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"

function Register() {

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const register = document.getElementById("register-modal")
  if (item.open && item.menuItem === "register") {
    register.style.display = "block"
  }

  const handleModalClose = (e) => {
    let menuItem = e.target.id
    dispatch(closeModal({ open: false, menuItem: menuItem }))
    register.style.display = "none"
  }

  return (
    <div id="register-modal" className="modal">
      <div className="modal-content animate">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <form action="action_page.php">
          <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account</p>
            <hr />

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />

            <p>By creating an account you agree to something. idk what though.</p>
            <button type="submit" className="registerbtn">Register</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default Register