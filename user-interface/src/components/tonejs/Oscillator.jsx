import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Tone from 'tone'
import store from '../../../src/app/store'

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



  return (
    <>
      <button id="turnOn" onClick={handleOn}>ON</button>
      <button id="turnOn" onClick={handleOff}>OFF</button>
      <label htmlFor="osc1-freq">Hz</label>
      <input id="osc1-freq" type="range" min="55" max="440"onChange={handleSlider}/>

      <label htmlFor="waveform-select">Waveform</label>
      <select id="waveform-select" onClick={handleWaveform}>
        <option name="sine" className="waveform-option" value="sine" >Sine</option>
        <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
        <option name="square" value="square" className="waveform-option" >Square</option>
      </select>
    </>
  )

}