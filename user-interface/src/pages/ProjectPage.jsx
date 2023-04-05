
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WarningModal from "../components/page_components/WarningModal";
import { Sidebar } from "../components/menus/Sidebar";
import Case from "../components/interface/Case";
import '../../src/styling/projectpage.css'

const ProjectPage = () => {
  const [modal, setModal] = useState()
  const navigate = useNavigate()
  
  const openNav = () => {
    document.getElementById("sideNav").style.width = "250px";
  }
  
  const handleModalOpen = () => {
    let openModal = document.getElementById('warning')
    openModal.style.display = ('block')
    setModal(document.getElementById('warning'))
  }

  const goHome = () => {
    handleModalOpen()
  }

  return (
    <div className="window">
      <div id="projectpageTitle" className="pageTitle">
        <div className="navbtns">
          <span onClick={openNav}>MENU</span>
          <span onClick={goHome}>HOME</span>
        </div>
        <div id="warning" >
          <WarningModal modal={modal}/>
        </div>
        <h1>PROJECT</h1>
        <h1 className="tadlab">TADLAB</h1>
      </div>
      <Sidebar />
      <h1 id="projectTitle">Project Title</h1>
      <div id="interfaceWindow">
        <div id="projectContainer">
          <Case />
        </div>
      </div>
    </div>
  )
}

export default ProjectPage