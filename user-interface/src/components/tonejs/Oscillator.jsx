import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Tone from 'tone'
import store from '../../../src/app/store'
import '../../../src/styling/interface/oscillatorpanel.css'

export const Oscillator = () => {
  const [freq, setFreq] = useState(0)
  const [waveform, setWaveform] = useState('sine')
  const power = useSelector(state => state.interface.value.power)
  const osc = new Tone.Oscillator()
  osc.toDestination()

  const handleOn = () => {
    osc.start()
  }
  const handleOff = () => {
    osc.stop()
  }

  const handleSlider = () => {
    let freq = document.getElementById("osc1-freq").value
    osc.frequency.value = freq
  }

  const handleWaveform = () => {
    let e = document.getElementById("waveform-select")
    let v = e.options[e.selectedIndex].value
    osc.type = v
  }

  const handleInput = () => {
    
  }

  const handleOutput = () => {

  }



  return (
    <>
    <div id="osc-inputs">
      <div id="frequency-container">
        <div id="toggle-container">
          <button id="oscOn" onClick={handleOn}>ON</button>
          <button id="oscOff" onClick={handleOff}>OFF</button>
        </div>
        <label htmlFor="osc1-freq">Hz</label>
        <input id="osc1-freq" type="range" min="20" max="2000"onChange={handleSlider}/>
      </div>

      <div id="waveform-container">
        <label htmlFor="waveform-select">Waveform</label>
        <select id="waveform-select" onClick={handleWaveform}>
          <option name="sine" value="sine" className="waveform-option">Sine</option>
          <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
          <option name="square" value="square" className="waveform-option" >Square</option>
        </select>
        <select id="input" onClick={handleInput}>
          <option name="osc2" value="osc2" className="osc-input" >Osc 2</option>
          <option name="lfo1" value="lfo1" className="osc-input" >LFO 1</option>
          <option name="lf2" value="lfo2" className="osc-input" >LFO 2</option>
        </select>
        <label htmlFor="input">In</label>
        <select id="output" onClick={handleOutput}>
          <option name="osc2" value="osc2" className="osc-input" >Osc 2</option>
          <option name="lfo1" value="lfo1" className="osc-input" >LFO 1</option>
          <option name="lf2" value="lfo2" className="osc-input" >LFO 2</option>
        </select>
        <label htmlFor="output">Out</label>
      </div>
    </div>
    </>
  )

}