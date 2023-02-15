import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import * as Tone from 'tone'
import { Reverb } from './Reverb'
import store from '../../../src/app/store'
import '../../../src/styling/interface/oscillatorpanel.css'

const handleOn = (osc) => {
  osc.triggerAttack()

}
const handleOff = (osc) => {
  osc.triggerRelease()
}

const handleSlider = (osc) => {
  let freq = document.getElementById("osc-freq").value
  osc.frequency.value = freq
}

const handleWaveform = (osc) => {
  let e = document.getElementById("waveform-select")
  let v = e.options[e.selectedIndex].value
  osc.oscillator.type = v
}

export const handleDecay = (e) => {
  e.preventDefault
  let decay = document.getElementById("decay").value
  // reverb.decay = decay
}

export const handlePreDelay = (e) => {
  e.preventDefault
  let preDelay = document.getElementById("pre-delay").value
  // reverb._preDelay = preDelay
}

export const handleWet = () => {
  let wet = document.getElementById("wet").value
  // reverb.wet = wet
}

export const reverbBypass = () => {
  let bypass = document.getElementById("reverbBypass")
  let classes = bypass.classList
  if (classes.contains("false")) {
    classes.remove("false")
    classes.add("true")
    osc1.disconnect(reverb)
    osc1.toDestination()
  } else {
    classes.remove("true")
    classes.add("false")
    osc1.connect(reverb)
    reverb.toDestination()
  }
  console.log(classes)
}

export const tremeloBypass = () => {
  let bypass = document.getElementById("tremeloBypass")
  let classes = bypass.classList
  if (classes.contains("false")) {
    classes.remove("false")
    classes.add("true")
    osc1.disconnect(tremelo)
    osc1.toDestination()
  } else {
    classes.remove("true")
    classes.add("false")
    osc1.connect(tremelo)
    tremelo.toDestination()
  }
  console.log(classes)
}

export const bitCrusherBypass = () => {
  let bypass = document.getElementById("bitCrusherBypass")
  let classes = bypass.classList
  if (classes.contains("false")) {
    classes.remove("false")
    classes.add("true")
    osc1.disconnect(crusher)
    osc1.toDestination()
  } else {
    classes.remove("true")
    classes.add("false")
    osc1.connect(crusher)
    crusher.toDestination()
  }
  console.log(classes)
}

export const ADSRFunction = () => {
  return Tone.Offline(() => {
    const ampEnv = new Tone.AmplitudeEnvelope({
      attack: 0.1,
      decay: 0.2,
      sustain: 1.0,
      release: 0.8
    }).toDestination();
    ampEnv.triggerAttackRelease("8t")

  }, 1.5, 1)
}

// const handleInput = (osc) => {

// }

// const handleOutput = (osc) => {
//   let e = document.getElementById("output")
//   let v = e.options[e.selectedIndex].value
//   osc.connect(channels[v])
// }
// export const osc1 = new Tone.PolySynth(Tone.Synth).toDestination()
// export const osc1 = new Tone.Synth()
// export const reverb = new Tone.Reverb({
//   decay: 2,
//   preDelay: 1,
//   wet: 1
// })

// export const tremelo = new Tone.Tremolo(9, 0.75).start()

// export const crusher = new Tone.BitCrusher(4)

export const Oscillator1 = () => {
  const [freq, setFreq] = useState(0)
  const [waveform, setWaveform] = useState('sine')
  const instRef = useRef(null) //use with useEffect to handle pops
  const power = useSelector(state => state.interface.value.power)
  // osc1.connect(reverb)
  // reverb.toDestination()
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