import { useNavigate } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate()

  const closeAccount = () => {
    document.getElementById("account").style.width = "0";
  }

  const handleManageAccount = () => {
    navigate('/userpage')
  }

  const logout = () => {
    Cookies.remove('token')
    navigate("/login")
    setUser(null)
  }


  return (
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
            <button id="manage-btn" onClick={handleManageAccount}>Manage</button>
          </div>
          <div >
            <button id="logout-btn" onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </div>
  )
}