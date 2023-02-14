import { osc1 } from "../tonejs/Oscillator"
import * as Tone from 'tone'
import { keyBoardTrigger } from "../tonejs/NoteTrigger"

export const Keys = ({k, handleTrigger, handleRelease}) => {
  const now = Tone.now()

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

  const keyTrigger = document.addEventListener("keydown", e => {
  //   switch (e.key) {
  //     case "a":
  //       return osc1.triggerAttack("C3", now);
  //     case "w":
  //       return osc1.triggerAttack("C#3", now);
  //     case "s":
  //       return osc1.triggerAttack("D3", now);
  //     case "e":
  //       return osc1.triggerAttack("D#3", now);
  //     case "d":
  //       return osc1.triggerAttack("E3", now);
  //     case "f":
  //       return osc1.triggerAttack("F3", now);
  //     case "t":
  //       return osc1.triggerAttack("F#3", now);
  //     case "g":
  //       return osc1.triggerAttack("G3", now);
  //     case "y":
  //       return osc1.triggerAttack("G#3", now);
  //     case "h":
  //       return osc1.triggerAttack("A3", now);
  //     case "u":
  //       return osc1.triggerAttack("A#3", now);
  //     case "j":
  //       return osc1.triggerAttack("B3", now);
  //     case "k":
  //       return osc1.triggerAttack("C4", now);
  //     case "o":
  //       return osc1.triggerAttack("C#4", now);
  //     case "l":
  //       return osc1.triggerAttack("D4", now);
  //     case "p":
  //       return osc1.triggerAttack("D#4", now);
  //     case ";":
  //       return osc1.triggerAttack("E4", now);
  //     default:
  //       return;
  //   }
  })

  const keyRelease = document.addEventListener("keyup", e => {
    switch (e.key) {
      case "a":
      case "w":
      case "s":
      case "e":
      case "d":
      case "f":
      case "t":
      case "g":
      case "y":
      case "h":
      case "u":
      case "j":
      case "k":
      case "o":
      case "l":
      case "p":
      case ";":
      
        osc1.triggerRelease();
    }
  })
  

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
              onKeyDown={keyTrigger}
              onKeyUp={keyRelease}
              ></div>
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
              ></div>
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
              ></div>
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
              ></div>
            )
          })}
        </div>
      </div>
    </>
  )
}