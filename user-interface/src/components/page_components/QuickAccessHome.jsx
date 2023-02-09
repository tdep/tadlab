

export const QuickAccess = () => {
  const openLink = () => {

  }

  const tiles = [1, 2, 3]
  return (
    <div id="quickLinksContainer">
      <div className="tiles">
        {tiles.map((tile) => {
          return(
            <div onClick={() => {openLink()}}>
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