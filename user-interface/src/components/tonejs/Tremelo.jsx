import * as Tone from 'tone'
import { handleDecay, handlePreDelay, handleWet, tremeloBypass } from './Oscillator'
import '../../../src/styling/interface/efx.css'



export const Tremelo = () => {


  return (
    <div id="reverb-controls">
      <div id="reverb-sliders">
        <label htmlFor="depth">Depth</label>
        <input id="depth" type="range" min="0.1" max="3" step="0.1" onChange={handleDecay} />
        <label htmlFor="frequency">Frequency</label>
        <input id="frequency" type="range" min="0.1" max="3" step="0.1" onChange={handlePreDelay} />
        <label htmlFor="spread">Spread</label>
        <input id="spread" type="range" min="0" max="1" step="0.1" onChange={handleWet} />
        <button id="tremeloBypass" className="bypass false" onClick={tremeloBypass}>Bypass</button>
      </div>
    </div>
  )
}