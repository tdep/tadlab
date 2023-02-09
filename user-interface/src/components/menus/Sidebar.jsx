import { Account } from "./Account";
import { About } from "./About";
import { NewProject } from "./NewProject";
import { OpenProject } from "./OpenProject";

export const Sidebar = () => {
  const closeNav = () => {
    document.getElementById("sideNav").style.width = "0";
  }

  const openAccount = () => {
    document.getElementById("account").style.width = "750px";
  }

  const openAbout = () => {
    document.getElementById("about").style.width = "750px";
  }

  const openNew = () => {
    document.getElementById("new").style.width = "750px";
  }

  const openOpen = () => {
    document.getElementById("open").style.width = "750px";
  }

  return (
    
      <div id="sideNav" className="sideNav">
        <div id="titleCard">
          <h1>TADLAB</h1>
        </div>
        <a href="javascript:void(0)" className="closeBtn" onClick={closeNav}>&times;</a>
        <a onClick={openAccount}>Account</a>
          <Account />
        <a onClick={openAbout}>About</a>
          <About />
        <a onClick={openNew}>New Project</a>
          <NewProject />
        <a onClick={openOpen}>Open Project</a>
          <OpenProject />
      </div>
  )
}