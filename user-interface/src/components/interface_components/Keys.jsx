export const Keys = () => {

  const cToEWhite = [1, 2, 3]
  const cToEBlack = [1, 2]
  const fToBWhite = [4, 5, 6, 7]
  const fToBBlack = [1, 2, 3]

  const whiteKey = {
    id: "",
    name: "",
    note: ""
  }

  const blackKey = {
    id: "",
    name: "",
    note: ""
  }

  return (
    <>
      <div className="cToE">
        <div className="white">
          {cToEWhite.map((key) => {
            return (
              <div className="cToEWhite"></div>
            )
          })}
        </div>
        <div className="black">
          {cToEBlack.map((key) => {
            return (
              <div className="cToEBlack"></div>
            )
          })}
        </div>

      </div>
      <div className="fToB">
        <div className="white">
          {fToBWhite.map((key) => {
            return (
              <div className="fToBWhite"></div>
            )
          })}
        </div>
        <div className="black">
          {fToBBlack.map((key) => {
            return (
              <div className="fToBBlack"></div>
            )
          })}
        </div>
      </div>
    </>
  )
}