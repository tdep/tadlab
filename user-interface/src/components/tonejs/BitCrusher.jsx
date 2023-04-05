import * as Tone from 'tone'
import { handleDecay, handlePreDelay, handleWet, bitCrusherBypass } from './Oscillator'
import '../../../src/styling/interface/efx.css'



export const BitCrusher = () => {


  return (
    <div id="reverb-controls">
      <div id="reverb-sliders">
        <label htmlFor="frequency">Bits</label>
        <input id="frequency" type="range" min="1" max="16" step="0.1" onChange={handlePreDelay} />
        <label htmlFor="spread">Wet</label>
        <input id="spread" type="range" min="0" max="1" step="0.1" onChange={handleWet} />
        <button id="bitCrusherBypass" className="bypass false" onClick={bitCrusherBypass}>Bypass</button>
      </div>
    </div>
  )
}