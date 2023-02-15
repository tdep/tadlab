import { useNavigate } from "react-router-dom"
import { Sidebar } from "../menus/Sidebar"

export const QuickAccess = () => {

const navigate = useNavigate()
  const openLink = () => {
    navigate('/tadlabmini')
  }

  const tiles = [1, 2, 3]
  return (
    <div id="quickLinksContainer">
      <div className="tiles">
        {tiles.map((tile) => {
          return (
            <div onClick={() => { openLink() }}>
              {
                tiles.map((tile) => {
                  return (
                    <div id="newProject" className="tile">
                      Quick Links
                    </div>
                  )
                })
              }
            </div>
          )
        })}
      </div>
    </div>
  )

}