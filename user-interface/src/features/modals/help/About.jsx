import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "../modalSlice"

function About() {

  const dispatch = useDispatch()
  const item = useSelector((state) => state.modal.value)
  const about = document.getElementById("about-modal")
  if (item.open && item.menuItem === "about") {
    about.style.display = "block"
  }

  const handleModalClose = (e) => {
    let menuItem = e.target.id
    dispatch(closeModal({ open: false, menuItem: menuItem }))
    about.style.display = "none"
  }

  return (
    <div id="about-modal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleModalClose}>&times;</span>
        <p>About</p>
      </div>
    </div>
  )

}

export default About