import { Keys } from './Keys'
import { osc1 } from '../tonejs/Oscillator'
import { useState, useEffect } from 'react'
import * as Tone from 'tone'
import '../../../src/styling/interface/keyboard.css'

const Keyboard = () => {
  const [octave, setOctave] = useState(3);
  // let octave = 3
  const now = Tone.now()
  
  const keyKey = {
    "a": `C${octave}`, "w": `C#${octave}`, "s": `D${octave}`, "e": `D#${octave}`, "d": `E${octave}`,
    "f": `F${octave}`, "t": `F#${octave}`, "g": `G${octave}`, "y": `G#${octave}`, "h": `A${octave}`, 
    "u": `A#${octave}`, "j": `B${octave}`, "k": `C${octave + 1}`, "o": `C#${octave + 1}`, "l": `D${octave + 1}`,
    "p": `D#${octave + 1}`, ";": `E${octave + 1}`
  }
  
  // Handle using the computer keyboard as an input
  const keyGrabber = () => {
    let keyTrigger = document.addEventListener("keydown", e => { 
      if (e.repeat) {
        return;
      }
      let key = e.key
      let note = keyKey[key]
      let domKey = document.getElementById(note)
      osc1.triggerAttack(note, now)
      domKey.style.backgroundColor = "#8c1212"
      domKey.style.color = "ivory"
      let hover = document.addEventListener("mouseover", e => { //to re-establish the hover effect after a keypress
        let key = e.target
        if (key.id == note) {
          if (key.className[4] == "W") {
            key.style.backgroundColor = "rgb(222, 217, 201)"
          } else {
            key.style.backgroundColor = "rgb(81, 80, 80)"
          }
        }
      })
      let exit = document.addEventListener("mouseout", e => {
        if (e.repeat) {
          return;
        }
        let key = e.target
        osc1.triggerRelease()
        if (key.id == note) {
          if (key.className[4] == "W") {
            key.style.backgroundColor = "ivory"
          } else {
            key.style.backgroundColor = "black"
          }
        } 
      })
    })
    
    let keyRelease = document.addEventListener("keyup", e => {
      if (e.repeat) {
        return;
      }
      let key = e.key
      let note = keyKey[key]
      let domKey = document.getElementById(note)
      osc1.triggerRelease(note)
      if((domKey.className[4]) == "W") {
        domKey.style.backgroundColor = "ivory"
        domKey.style.color = "black"
      } else {
        domKey.style.backgroundColor = "black"
      }
    })
    
  }
  keyGrabber()

  // handle the mouse as an input
  // probaby need to combine the mouse triggers to handle dragging
  const handleTrigger = (e) => {
    if (e.repeat) {
      return;
    }
    let key = e.target
    let note = key.id
    switch (e.type) {
      case "mousedown":
        osc1.triggerAttack(note, now)
        key.style.backgroundColor = "#8c1212"
        key.style.color = "ivory"
      default:
        return
    }
  }

  //handle the mouse as an input
  const handleRelease = (e) => {
    let key = e.target
    let note = key.id
    osc1.triggerRelease(note, now)
    if((key.className[4]) == "W"){
      key.style.backgroundColor = "ivory"
      key.style.color = "black"
    } else {
      key.style.backgroundColor = "black"
    }
  }

  const showNoteNames = () => { 
    let keyLabel = document.querySelectorAll("p.keyLabel")
    keyLabel.forEach((label) => {
      if (label.style.color != "transparent"){
        label.style.color = "transparent"
      } else {
        if (label.parentElement.className[4] == "W") {
          label.style.color = "black"
        } else {
          label.style.color = "ivory"
        }
      }
    })
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
        onDragEnter={handleTrigger}
        onDragLeave={handleRelease}
      ><p className="keyLabel">C</p>
      </div>
      <div id="octave-buttons">
        <label htmlFor="octave-btn-container">Octave</label>
        <div id="octave-btn-container"></div>
          <button id="octave-up" className="octave-btn" onClick={() => setOctave(octave + 1)}><b>+</b></button>
          <button id="octave-down" className="octave-btn" onClick={() => setOctave(octave - 1)}><b>-</b></button>
          <button id="note-names" className="show-notenames" onClick={showNoteNames}>C#</button>
      </div>
    </div>
  )

}

export default Keyboard