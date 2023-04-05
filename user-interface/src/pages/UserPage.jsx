import { useNavigate } from "react-router-dom"
import { Sidebar } from "../components/menus/Sidebar"
import '../../src/styling/userpage.css'

const UserPage = () => {
  const navigate = useNavigate()

  const openNav = () => {
    document.getElementById("sideNav").style.width = "250px";
  }

  const goHome = () => {
    navigate('/home')
  }

  return (

    <div className="userPage">
      <div id="userpageTitle" className="pageTitle">
        <div className="navbtns">
          <span onClick={openNav}>MENU</span>
          <span onClick={goHome}>HOME</span>
        </div>
        <h1>MANAGE</h1>
        <h1>ACCOUNT</h1>
        <h1 className="tadlab">TADLAB</h1>
      </div>
      <Sidebar />
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
    </div>

  )
}

export default UserPage