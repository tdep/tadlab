import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"

function SaveProject () {
  
  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const saveModal = document.getElementById("save-modal")
  if (item.open && item.menuItem === "save-project") {
    saveModal.style.display = "block"
  }

  const handleModalClose = (e) => {
    let menuItem = e.target.id
    dispatch(closeModal({ open: false, menuItem: menuItem }))
    saveModal.style.display = "none"
  }

  return (
    <div id="save-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <p>Save Project</p>
      </div>
    </div>
  )

}

export default SaveProject