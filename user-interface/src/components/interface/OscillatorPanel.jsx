import { Oscillator } from '../tonejs/Oscillator'

import '../../../src/styling/interface/modulepanel.css'

const OscillatorPanel = () => {
  return (
    <div id="oscillatorPanel">
      <div id="oscillatorContainer">
        <Oscillator />
      </div>
      <div id="lfoContainer">

      </div>
      <h1>Oscillator Bank</h1>
    </div>
  )
}

export default OscillatorPanel