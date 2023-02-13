export const Keys = () => {

  const cToEWhite = [1, 2, 3]
  const cToEBlack = [1, 2]
  const fToBWhite = [4, 5, 6, 7]
  const fToBBlack = [1, 2, 3]


  let i = 1
  let j = 1
  let notes = {
    naturals: {1: 'C', 2: 'D', 3: 'E', 4: 'F', 5: 'G', 6: 'A', 7:'B'},
    sharps: {1:'C#', 2:'D#', 4:'F#', 5:'G#', 6:'A#'}
  }

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
            const keyId = notes.naturals[i]
            i += 1
            return (
              <div 
              className="cToEWhite"
              id={keyId}
              ></div>
            )
          })}
        </div>
        <div className="black">
          {cToEBlack.map((key) => {
            let keyId
            if (j != 3) {
              keyId = notes.sharps[j]
              j += 1
            } else {
              j = 4
              keyId = notes.sharps[j]
              j += 1
            }
            return (
              <div 
              className="cToEBlack"
              id={keyId}
              ></div>
            )
          })}
        </div>

      </div>
      <div className="fToB">
        <div className="white">
          {fToBWhite.map((key) => {
            const keyId = notes.naturals[i]
            i += 1
            return (
              <div 
              className="fToBWhite"
              id={keyId}
              ></div>
            )
          })}
        </div>
        <div className="black">
          {fToBBlack.map((key) => {
            let keyId
            if (j != 3) {
              keyId = notes.sharps[j]
              j += 1
            } else {
              j = 4
              keyId = notes.sharps[j]
              j += 1
            }
            return (
              <div 
              className="fToBBlack"
              id={keyId}
              ></div>
            )
          })}
        </div>
      </div>
    </>
  )
}