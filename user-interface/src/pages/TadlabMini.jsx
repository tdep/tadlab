import { Keys } from '../components/interface_components/Keys';
import { togglePwr } from '../features/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as Tone from 'tone'

import '../../src/styling/interface/tadlabmini.css'

const TadlabMini = () => {
  const [octave, setOctave] = useState(3);
  // let octave = 3
  const dispatch = useDispatch()

  const power = useSelector(state => state.interface.value.power)

  const handleToggle = async () => {
    let checkBox = document.getElementById('toggle')
    let pwrLED = document.getElementById('pwrLED')
    if (checkBox.checked == true) {
      pwrLED.style.background = "#f20c13";
      dispatch(togglePwr({ power: true }))
      await Tone.start()
      console.log(!power, ': audio started') //!power because the original state prints instead of the current state
    } else {
      pwrLED.style.background = "#9B2226";
      dispatch(togglePwr({ power: false }))
    }
  }

  const handleWaveform = (osc) => {
    let e = document.getElementById("waveform-select")
    let v = e.options[e.selectedIndex].value
    osc.oscillator.type = v
  }

  const toggleBypass = (module) => {
    let bypass = document.getElementById(module)


  }

  const now = Tone.now()
  const osc1 = new Tone.PolySynth(Tone.Synth).toDestination()
  const osc2 = new Tone.PolySynth(Tone.Synth).toDestination()
  osc1.volume.value = -10

  const keyKey = {
    "a": `C${octave}`, "w": `C#${octave}`, "s": `D${octave}`, "e": `D#${octave}`, "d": `E${octave}`,
    "f": `F${octave}`, "t": `F#${octave}`, "g": `G${octave}`, "y": `G#${octave}`, "h": `A${octave}`,
    "u": `A#${octave}`, "j": `B${octave}`, "k": `C${octave + 1}`, "o": `C#${octave + 1}`, "l": `D${octave + 1}`,
    "p": `D#${octave + 1}`, ";": `E${octave + 1}`
  }

  // Handle using the computer keyboard as an input
  const keyGrabber = () => {
    let keyTrigger = document.addEventListener("keydown", e => {
      if (e.repeat) {
        return;
      }
      let key = e.key
      let note = keyKey[key]
      let domKey = document.getElementById(note)
      osc1.triggerAttack(note, now)
      domKey.style.backgroundColor = "#8c1212"
      domKey.style.color = "ivory"
      let hover = document.addEventListener("mouseover", e => { //to re-establish the hover effect after a keypress
        let key = e.target
        if (key.id == note) {
          if (key.className[4] == "W") {
            key.style.backgroundColor = "rgb(222, 217, 201)"
          } else {
            key.style.backgroundColor = "rgb(81, 80, 80)"
          }
        }
      })
      let exit = document.addEventListener("mouseout", e => {
        if (e.repeat) {
          return;
        }
        let key = e.target
        osc1.triggerRelease()
        if (key.id == note) {
          if (key.className[4] == "W") {
            key.style.backgroundColor = "ivory"
          } else {
            key.style.backgroundColor = "black"
          }
        }
      })
    })

    let keyRelease = document.addEventListener("keyup", e => {
      if (e.repeat) {
        return;
      }
      let key = e.key
      let note = keyKey[key]
      let domKey = document.getElementById(note)
      osc1.triggerRelease(note)
      if ((domKey.className[4]) == "W") {
        domKey.style.backgroundColor = "ivory"
        domKey.style.color = "black"
      } else {
        domKey.style.backgroundColor = "black"
      }
    })

  }
  keyGrabber()

  // handle the mouse as an input
  // probaby need to combine the mouse triggers to handle dragging
  const handleTrigger = (e) => {
    if (e.repeat) {
      return;
    }
    let key = e.target
    let note = key.id
    switch (e.type) {
      case "mousedown":
        osc1.triggerAttack(note, now)
        key.style.backgroundColor = "#8c1212"
        key.style.color = "ivory"
      default:
        return
    }
  }

  //handle the mouse as an input
  const handleRelease = (e) => {
    let key = e.target
    let note = key.id
    osc1.triggerRelease(note, now)
    if ((key.className[4]) == "W") {
      key.style.backgroundColor = "ivory"
      key.style.color = "black"
    } else {
      key.style.backgroundColor = "black"
    }
  }

  const showNoteNames = () => {
    let keyLabel = document.querySelectorAll("p.keyLabel")
    keyLabel.forEach((label) => {
      if (label.style.color != "transparent") {
        label.style.color = "transparent"
      } else {
        if (label.parentElement.className[4] == "W") {
          label.style.color = "black"
        } else {
          label.style.color = "ivory"
        }
      }
    })
  }
  let osc1On = false
  const toggleOsc1 = () => {
    let toggle = document.getElementById("osc1Toggle")
    if (osc1On) {
      toggle.style.backgroundColor = "#a01b1b"

      osc1On = !osc1On
      console.log("off")
    } else {
      toggle.style.backgroundColor = "#ff4608"
      
      osc1On = !osc1On
      console.log("on")
    }
  }

  let osc2On = false
  const toggleOsc2 = () => {
    let toggle = document.getElementById("osc2Toggle")
    if (osc2On) {
      toggle.style.backgroundColor = "#a01b1b"

      osc2On = !osc2On
      console.log("off")
    } else {
      toggle.style.backgroundColor = "#ff4608"

      osc2On = !osc2On
      console.log("on")
    }
  }

  return (
    <div id="tadlab-mini-container">
      <div id="spacer-left"></div>
      <div id="tadlab-mini-userinterface">
        <div id="spacer-above"></div>
        <div id="tadlab-mini-case">
          <div id="tadlab-mini-controls">
            <div id="oscillators" className="control-module">
              <div id="osc1" className="osc-container">
                <select id="osc1Waveform" className="waveform-selectors">
                  <option name="sine" value="sine" className="waveform-option" onClick={() => handleWaveform(osc1)}>Sine</option>
                  <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
                  <option name="sawtooth" value="sawtooth" className="waveform-option" >Sawtooth</option>
                  <option name="square" value="square" className="waveform-option" >Square</option>
                </select>
                <p>
                  <a id="osc1Toggle" className="control-toggle" onClick={toggleOsc1}>O|</a>
                </p>
              </div>
              <div id="osc2" className="osc-container">
                <select id="osc2Waveform" className="waveform-selectors">
                  <option name="sine" value="sine" className="waveform-option" onClick={() => handleWaveform(osc2)}>Sine</option>
                  <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
                  <option name="sawtooth" value="sawtooth" className="waveform-option" >Sawtooth</option>
                  <option name="square" value="square" className="waveform-option" >Square</option>
                </select>
                <p>
                  <a id="osc2Toggle" className="control-toggle" onClick={toggleOsc2}>O|</a>
                </p>
              </div>
            </div>
            <div id="efx-container">
              <div id="reverb" className="efx-btn-container">
                <div id="rvbT-1" className="efx">
                  <p>
                    <label htmlFor="reverbToggle-1">
                      Rvb-1
                    </label>
                    <a  id="reverbToggle-1" className="rvb-toggle">|R|</a>
                  </p>
                </div>
                <div id="rvbT-2" className="efx">
                  <p>
                    <label htmlFor="reverbToggle-2">
                      Rvb-2
                    </label>
                    <a id="reverbToggle-2" className="rvb-toggle">|R|</a>
                  </p>
                </div>
                <div id="rvbT-3" className="efx">
                  <p>
                    <label htmlFor="reverbToggle-3">
                      Rvb-3
                    </label>
                    <a id="reverbToggle-3" className="rvb-toggle">|R|</a>
                  </p>
                </div>
                <div id="rvbT-4" className="efx">
                  <p>
                    <label htmlFor="reverbToggle-4">
                      Rvb-4
                    </label>
                    <a id="reverbToggle-4" className="rvb-toggle">|R|</a>
                  </p>
                </div>
              </div>
              <div id="tremelo" className="efx-btn-container">
                <div id="tremT-1" className="efx">
                  <p>
                    <a id="tremToggle-1" className="trem-toggle">|T|</a>
                    <label htmlFor="tremToggle-1">
                      Trem-1
                    </label>
                  </p>
                </div>
                <div id="tremT-2" className="efx">
                  <p>
                    <a id="tremToggle-2" className="trem-toggle">|T|</a>
                    <label htmlFor="tremToggle-2">
                      Trem-2
                    </label>
                  </p>
                </div>
                <div id="tremT-3" className="efx">
                  <p>
                    <a id="tremToggle-3" className="trem-toggle">|T|</a>
                    <label htmlFor="tremToggle-3">
                      Trem-3
                    </label>
                  </p>
                </div>
                <div id="tremT-4" className="efx">
                  <p>
                    <a id="tremToggle-4" className="trem-toggle">|T|</a>
                    <label htmlFor="tremToggle-4">
                      Trem-4
                    </label>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="tadlab-mini-keyboard">
            <div id="keys">
              <Keys k={octave} handleTrigger={handleTrigger} handleRelease={handleRelease} />
              <Keys k={octave + 1} handleTrigger={handleTrigger} handleRelease={handleRelease} />
              <div id={`C${octave + 2}`}
                className="cToEWhite"
                onMouseDown={handleTrigger}
                onMouseUp={handleRelease}
                onDragEnter={handleTrigger}
                onDragLeave={handleRelease}
              ><p className="keyLabel">C</p>
              </div>
              <div id="octave-buttons">
                <label htmlFor="octave-btn-container">Octave</label>
                <div id="octave-btn-container"></div>
                <button id="octave-up" className="octave-btn" onClick={() => setOctave(octave + 1)}><b>+</b></button>
                <button id="octave-down" className="octave-btn" onClick={() => setOctave(octave - 1)}><b>-</b></button>
                <button id="note-names" className="show-notenames" onClick={showNoteNames}>C#</button>
              </div>
              <div id="power">
                <label className="switch" id="powerSwitch" onClick={handleToggle}>

                  <input type="checkbox" id="toggle" />
                  <span className="slider round" ></span>
                </label>
                <div id="power">
                  <p id="pwrLabel">off / on</p>
                  <div id="pwrLED" ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TadlabMini