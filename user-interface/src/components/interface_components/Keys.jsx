// import { osc1 } from "../tonejs/Oscillator"
import * as Tone from 'tone'
// import { keyBoardTrigger } from "../tonejs/NoteTrigger"

export const Keys = ({k, handleTrigger, handleRelease}) => {
  const now = Tone.now()

  const cToEWhite = ["C", "D", "E"]
  const cToEBlack = ["C#", "D#"]
  const fToBWhite = ["F", "G", "A", "B"]
  const fToBBlack = ["F#", "G#", "A#"]


  let i = 1
  let j = 1
  let notes = {
    naturals: {1: 'C', 2: 'D', 3: 'E', 4: 'F', 5: 'G', 6: 'A', 7:'B'},
    sharps: {1:'C#', 2:'D#', 4:'F#', 5:'G#', 6:'A#'}
  }
  

  return (
    <>
      <div className="cToE">
        <div className="white">
          {cToEWhite.map((key) => {
            const keyId = `${notes.naturals[i]}${k}`
            i += 1
            return (
              <div 
              className="cToEWhite"
              id={keyId}
              onMouseDown={handleTrigger}
              onMouseUp={handleRelease}
              onDragEnter={handleTrigger}
              onDragLeave={handleRelease}
              ><p className="keyLabel">{key}</p></div>
            )
          })}
        </div>
        <div className="black">
          {cToEBlack.map((key) => {
            let keyId
            if (j != 3) {
              keyId = `${notes.sharps[j]}${k}`
              j += 1
            } else {
              j = 4
              keyId = `${notes.sharps[j]}${k}`
              j += 1
            }
            return (
              <div 
              className="cToEBlack"
              id={keyId}
              onMouseDown={handleTrigger}
              onMouseUp={handleRelease}
              onDragEnter={handleTrigger}
              onDragLeave={handleRelease}
              >
                <div className="top-contour"></div>
                <p className="keyLabel">{key}</p>
              </div>
            )
          })}
        </div>

      </div>
      <div className="fToB">
        <div className="white">
          {fToBWhite.map((key) => {
            const keyId = `${notes.naturals[i]}${k}`
            i += 1
            return (
              <div 
              className="fToBWhite"
              id={keyId}
              onMouseDown={handleTrigger}
              onMouseUp={handleRelease}
              onDragEnter={handleTrigger}
              onDragLeave={handleRelease}
              ><p className="keyLabel">{key}</p></div>
            )
          })}
        </div>
        <div className="black">
          {fToBBlack.map((key) => {
            let keyId
            if (j != 3) {
              keyId = `${notes.sharps[j]}${k}`
              j += 1
            } else {
              j = 4
              keyId = `${notes.sharps[j]}${k}`
              j += 1
            }
            return (
              <div 
              className="fToBBlack"
              id={keyId}
              onMouseDown={handleTrigger}
              onMouseUp={handleRelease}
              onDragEnter={handleTrigger}
              onDragLeave={handleRelease}
              >
                <div className="top-contour"></div>
                <p className="keyLabel">{key}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}