import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Tone from 'tone'
import { channel1 } from './Mixer'
import store from '../../../src/app/store'
import '../../../src/styling/interface/oscillatorpanel.css'

// const channels = {
//   ch1: channel1
// }

const handleOn = (osc) => {
  osc.start().connect(channel1)

}
const handleOff = (osc) => {
  osc.disconnect()
}

const handleSlider = (osc) => {
  let freq = document.getElementById("osc-freq").value
  osc.frequency.value = freq
}

const handleWaveform = (osc) => {
  let e = document.getElementById("waveform-select")
  let v = e.options[e.selectedIndex].value
  osc.type = v
}

// const handleInput = (osc) => {

// }

// const handleOutput = (osc) => {
//   let e = document.getElementById("output")
//   let v = e.options[e.selectedIndex].value
//   osc.connect(channels[v])
// }

export const osc1 = new Tone.Oscillator()

export const Oscillator1 = () => {
  const [freq, setFreq] = useState(0)
  const [waveform, setWaveform] = useState('sine')
  const power = useSelector(state => state.interface.value.power)
  osc1.connect(channel1)
  osc1.volume.value = -10
  return (
    <>
    <div id="osc-inputs">
      <div id="frequency-container">
        <div id="toggle-container">
          <button id="oscOn" onClick={() => handleOn(osc1)}>ON</button>
          <button id="oscOff" onClick={() => handleOff(osc1)}>OFF</button>
        </div>
        <label htmlFor="osc-freq">Hz</label>
        <input id="osc-freq" type="range" min="20" max="2000" onChange={() => handleSlider(osc1)}/>
      </div>

      <div id="waveform-container">
        <label htmlFor="waveform-select">Waveform</label>
        <select id="waveform-select" onClick={() => handleWaveform(osc1)}>
          <option name="sine" value="sine" className="waveform-option">Sine</option>
          <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
          <option name="square" value="square" className="waveform-option" >Square</option>
        </select>
        {/* <select id="input" onClick={() => handleInput(osc1)}>
          <option name="osc2" value="osc2" className="osc-input" >Osc 2</option>
          <option name="lfo1" value="lfo1" className="osc-input" >LFO 1</option>
          <option name="lf2" value="lfo2" className="osc-input" >LFO 2</option>
        </select>
        <label htmlFor="input">In</label>
        <select id="output" onClick={() => handleOutput(osc1)}>
          <option name="ch1" value="ch1" className="osc-input" >Channel 1</option>
          <option name="ch2" value="ch2" className="osc-input" >Channel 2</option>
          <option name="ch3" value="ch3" className="osc-input" >Channel 3</option>
          <option name="ch4" value="ch4" className="osc-input" >Channel 4</option>
        </select>
        <label htmlFor="output">Out</label> */}
      </div>
    </div>
    </>
  )

}

export const Oscillator2 = () => {
  const [freq, setFreq] = useState(0)
  const [waveform, setWaveform] = useState('sine')
  const power = useSelector(state => state.interface.value.power)
  const osc2 = new Tone.Oscillator()
  

  return (
    <>
      <div id="osc-inputs">
        <div id="frequency-container">
          <div id="toggle-container">
            <button id="oscOn" onClick={() => handleOn(osc2)}>ON</button>
            <button id="oscOff" onClick={() => handleOff(osc2)}>OFF</button>
          </div>
          <label htmlFor="osc-freq">Hz</label>
          <input id="osc-freq" type="range" min="20" max="2000" onChange={() => handleSlider(osc2)} />
        </div>

        <div id="waveform-container">
          <label htmlFor="waveform-select">Waveform</label>
          <select id="waveform-select" onClick={() => handleWaveform(osc2)}>
            <option name="sine" value="sine" className="waveform-option">Sine</option>
            <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
            <option name="square" value="square" className="waveform-option" >Square</option>
          </select>
          <select id="input" onClick={() => handleInput(osc2)}>
            <option name="osc2" value="osc2" className="osc-input" >Osc 2</option>
            <option name="lfo1" value="lfo1" className="osc-input" >LFO 1</option>
            <option name="lf2" value="lfo2" className="osc-input" >LFO 2</option>
          </select>
          <label htmlFor="input">In</label>
          <select id="output" onClick={() => handleOutput(osc2)}>
            <option name="ch1" value="ch1" className="osc-input" >Channel 1</option>
            <option name="ch2" value="ch2" className="osc-input" >Channel 2</option>
            <option name="ch3" value="ch3" className="osc-input" >Channel 3</option>
            <option name="ch4" value="ch4" className="osc-input" >Channel 4</option>
          </select>
          <label htmlFor="output">Out</label>
        </div>
      </div>
    </>
  )

}