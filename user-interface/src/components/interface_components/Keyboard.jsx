import { Keys } from './Keys'
import { osc1 } from '../tonejs/Oscillator'
import * as Tone from 'tone'
import '../../../src/styling/interface/keyboard.css'

const Keyboard = () => {
  const now = Tone.now()
  const octave = 3

  const changeOctave = () => {

  }

  const handleTrigger = (e) => {
    let key = e.target
    let note = key.id
    osc1.triggerAttack(note, now)
    key.style.backgroundColor =  "#8c1212"
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