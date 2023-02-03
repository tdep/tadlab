import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"

function OpenProject() {

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const openModal = document.getElementById("open-modal")
  if (item.open && item.menuItem === "open-project") {
    openModal.style.display = "block"
  }

  const handleModalClose = (e) => {
    let menuItem = e.target.id
    dispatch(closeModal({ open: false, menuItem: menuItem }))
    openModal.style.display = "none"
  }

  return (
    <div id="open-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <p>Open Project</p>
      </div>
    </div>
  )

}

export default OpenProject