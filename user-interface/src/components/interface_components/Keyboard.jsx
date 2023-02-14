import { Keys } from './Keys'
import { osc1 } from '../tonejs/Oscillator'
import * as Tone from 'tone'
import '../../../src/styling/interface/keyboard.css'

const Keyboard = () => {
  const now = Tone.now()
  const octave = 3
  const keyKey = {
    "a": `C${octave}`, "w": `C#${octave}`, "s": `D${octave}`, "e": `D#${octave}`, "d": `E${octave}`,
    "f": `F${octave}`, "t": `F#${octave}`, "g": `G${octave}`, "y": `G#${octave}`, "h": `A${octave}`, 
    "u": `A#${octave}`, "j": `B${octave}`, "k": `C${octave + 1}`, "o": `C#${octave + 1}`, "l": `D${octave + 1}`,
    "p": `D#${octave + 1}`, ";": `E${octave + 1}`
  }
  
  const changeOctave = () => {
    
  }
  
  const keyGrabber = () => {
    let keyTrigger = document.addEventListener("keydown", e => { 
      let key = e.key
      let note = keyKey[key]
      osc1.triggerAttack(note, now)
    })
    
  }
  keyGrabber()

  const handleTrigger = (e) => {
    let key = e.target
    let note = key.id
    switch (e.type) {
      case "mousedown":
        osc1.triggerAttack(note, now)
        key.style.backgroundColor =  "#8c1212"
      default:
        return
    }
  }

  const handleRelease = (e) => {
    let key = e.target
    osc1.triggerRelease(now)
    if((key.className[4]) == "W"){
      key.style.backgroundColor = "ivory"
    } else {
      key.style.backgroundColor = "black"
    }
  }

  return (
    <div id="keys">
      <Keys k={octave} handleTrigger={handleTrigger} handleRelease={handleRelease} />
      <Keys k={octave + 1} handleTrigger={handleTrigger} handleRelease={handleRelease} />
      <Keys k={octave + 2} handleTrigger={handleTrigger} handleRelease={handleRelease} />
      <div id={`C${octave + 3}`} 
        className="cToEWhite" 
        onMouseDown={handleTrigger}
        onMouseUp={handleRelease}
        onKeyDown={handleTrigger}
        onDragEnter={handleTrigger}
        onDragLeave={handleRelease}
      ></div>
    </div>
  )

}

export default Keyboard