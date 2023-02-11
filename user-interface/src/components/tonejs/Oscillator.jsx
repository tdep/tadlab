import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as Tone from 'tone'
import { HighContrast } from 'react-dial-knob'
import store from '../../../src/app/store'

export const Oscillator = () => {
  const [freq, setFreq] = useState(0)
  const power = useSelector(state => state.interface.value.power)
  const osc = new Tone.Oscillator()
  osc.type = 'sine'
  osc.toDestination()

  const handleOn = () => {
    osc.start()
  }
  const handleOff = () => {
    osc.stop()
  }

  const handleSlider = () => {
    let freq = document.getElementById("freq").value
    osc.frequency.value = freq
  }



  return (
    <>
      <label
        id={'volLabel'}
        style={{
          fontSize: '10px',
          margin: '0'
        }}
      >
        Osc. 1
      </label>
      <HighContrast
        diameter={50}
        min={200}
        max={20000}
        step={1}
        jumpLimit={0.1}
        value={freq}
        theme={{
          defaultColor: "#9B2226",
          activeColor: "#BB3E03"
        }}
        style={{
          position: 'relative',
          margin: '0px auto',
          width: '30px'
        }}
        onValueChange={setFreq}
        arialLabelledBy={'volLabel'}
        spaceMaxFromZero={false}
      >
      </HighContrast>
      <button id="turnOn" onClick={handleOn}>ON</button>
      <button id="turnOn" onClick={handleOff}>OFF</button>
      <input id="freq" type="range" min="55" max="440"onChange={handleSlider}/>
    </>
  )

}