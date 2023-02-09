import { useNavigate } from 'react-router-dom'

import '../../../src/styling/projectpage.css'

function WarningModal() {
  const navigate = useNavigate()
  let modal = document.getElementById("warning")

  const handleModalClose = () => {
    modal.style.display = "none"
  }

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none"
    }
  }

  const handleLeaveAndSave = () => {

  }

  const handleLeave = () => {
    navigate('/home')
  }

  return (
    <div id="warning-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <div id="text">
          <h3>WARNING!</h3>
          <p>You are about to leave the page without saving your project!</p>
          <p>Do you want to continue?</p>
        </div>
        <div>
          <button id="save" onClick={handleLeaveAndSave}>Leave & Save</button>
          <button id="nosave" onClick={handleLeave}>Leave without saving</button>
          <button id="cancel" onClick={handleModalClose}>Cancel</button>
        </div>
      </div>
    </div>
  )

}

export default WarningModal