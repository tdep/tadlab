import { Oscillator1 } from '../tonejs/Oscillator'

import '../../../src/styling/interface/modulepanel.css'
import LFO from '../tonejs/LFO'

const OscillatorPanel = () => {
  return (
    <div id="oscillatorPanel">
      <div id="oscillatorContainer">
        <Oscillator1 />
        {/* <Oscillator1 /> */}
      </div>
      <div id="lfoContainer">
        <LFO />
        {/* <LFO />f */}
      </div>
      <h1>Oscillator Bank</h1>
    </div>
  )
}

export default OscillatorPanel