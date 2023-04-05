import * as Tone from 'tone'
import { handleDecay, handlePreDelay, handleWet, reverbBypass } from './Oscillator'
import '../../../src/styling/interface/efx.css'



export const Reverb = () => {

 
  return (
    <div id="reverb-controls">
      <div id="reverb-sliders">
        <label htmlFor="decay">Decay</label>
        <input id="decay" type="range" min="0.1" max="3" step="0.1" onChange={handleDecay} />
        <label htmlFor="pre-delay">Pre-Delay</label>
        <input id="pre-delay" type="range" min="0.1" max="3" step="0.1" onChange={handlePreDelay} />
        <label htmlFor="wet">Wet</label>
        <input id="wet" type="range" min="0" max="1" step="0.1" onChange={handleWet} />
        <button id="reverbBypass" className="bypass false" onClick={reverbBypass}>Bypass</button>
      </div>
    </div>
  )
}