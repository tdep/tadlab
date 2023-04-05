import * as Tone from 'tone'
import '../../../src/styling/interface/oscillatorpanel.css'

const LFO = () => {
  const lfo = new Tone.LFO()
  lfo.toDestination()

  const handleOn = () => {

  }

  const handleOff = () => {

  }

  const handleSlider = () => {
    let freq = document.getElementById("lfo1-freq").value
    lfo.frequency.value = freq
  }

  const handleWaveform = () => {
    let e = document.getElementById("lfo-waveform-select")
    let v = e.options[e.selectedIndex].value
    lfo.type = v
  }

  // const handleOutput = () => {
  //   let e = document.getElementById("output")
  //   let v = e.options[e.selectedIndex].value
  //   lfo.connect(channels[v])
  //   console.log(v)
  // }

  return (
    <>
      <div id="lfo-inputs">
        <div id="lfo-frequency-container">
          <div id="lfo-toggle-container">
            <button id="lfoOn" onClick={handleOn}>ON</button>
            <button id="lfoOff" onClick={handleOff}>OFF</button>
          </div>
          <label htmlFor="lfo1-freq">Hz</label>
          <input id="lfo1-freq" type="range" min="0.1" max="10" onChange={handleSlider}/>
        </div>

        <div id="lfo-waveform-container">
          <label htmlFor="lfo-waveform-select">Waveform</label>
          <select id="lfo-waveform-select" onClick={handleWaveform}>
            <option name="sine" value="sine" className="lfo-waveform-option">Sine</option>
            <option name="triangle" value="triangle" className="lfo-waveform-option">Triangle</option>
            <option name="square" value="square" className="lfo-waveform-option">Square</option>
          </select>
          {/* <select id="output" onClick={handleOutput}>
            <option name="osc1" value="osc1" className="osc-input" >Osc 1</option>
            <option name="ch1" value="ch12" className="osc-input" >Channel 1</option>
          </select>
          <label htmlFor="output">Out</label> */}
        </div>
      </div>
    </>
  )
}

export default LFO