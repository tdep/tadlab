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
    let note = e.target.id
    osc1.triggerAttack(note, now)
  }

  const handleRelease = (e) => {
    osc1.triggerRelease(now)
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