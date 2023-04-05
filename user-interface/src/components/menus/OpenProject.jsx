import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../../../src/styling/openprojectmenu.css'

export const OpenProject = () => {
  const form = useRef()
  const navigate = useNavigate()

  const closeOpen = () => {
    document.getElementById("open").style.width = "0";
  }

  const handleSubmit = () => {
    navigate('/projectpage')
  }

  const handleCancel = () => {
    closeNew()
  }



  return (
    <div id="open" className="menu-card">
      <a href="javascript:void(0)" className="closeBtn" onClick={closeOpen}>&times;</a>
      <h1>NEW PROJECT</h1>
      <div id="open-container" className="menu-card-container">
        <div>
          <form onSubmit={handleSubmit} ref={form}>
            <div className="container">
              <label htmlFor="name"><b>Project Name</b></label>
              <input
                id="project-name"
                className="open-input"
                type="text"
                placeholder="Name your project"
                name="name"
              />

              <label htmlFor="controller"><b>Select Controller</b></label>
              <select
                id="controller-select"
                className="open-input"
              >
                <option name="controller" defaultValue="none" selected disabled hidden>Select a controller</option>
                <option name="controller" value="">New Controller</option>
                <option name="controller" value="">Oxygen-25</option>
                <option name="controller" value="">Keylab-88</option>
              </select>
              <button type="submit" id="start-btn"><b>Start</b></button>
              <button type="button" id="cancel-btn" onClick={handleCancel}><b>Cancel</b></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}