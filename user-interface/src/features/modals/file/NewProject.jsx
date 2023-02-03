import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"

function NewProject() {

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const newModal = document.getElementById("new-modal")
  if (item.open && item.menuItem === "new-project") {
    newModal.style.display = "block"
  }

  const handleModalClose = (e) => {
    let menuItem = e.target.id
    dispatch(closeModal({ open: false, menuItem: menuItem }))
    newModal.style.display = "none"
  }

  return (
    <div id="new-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <p>New Project</p>
      </div>
    </div>
  )

}

export default NewProject