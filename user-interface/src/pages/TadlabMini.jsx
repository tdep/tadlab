import { Keys } from '../components/interface_components/Keys';
import { togglePwr } from '../features/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as Tone from 'tone'

import '../../src/styling/interface/tadlabmini.css'

const TadlabMini = () => {
  const [octave, setOctave] = useState(3);
  const [onOff, setOnOff] = useState(false);
  const [state, setState] = useState("")
  // let octave = 3
  const dispatch = useDispatch()

  const power = useSelector(state => state.interface.value.power)

  const handleToggle = async () => {
    let checkBox = document.getElementById('toggle')
    let pwrLED = document.getElementById('pwrLED')
    if (checkBox.checked == true) {
      pwrLED.style.background = "#f20c13";
      pwrLED.style.boxShadow = "inset 0px -3px 3px #580e0e, inset 0px 1px 3px #DEE2E6, 1px 4px 4px #760508, -1px -2px 4px #760508"
      dispatch(togglePwr({ power: true }))
      await Tone.start()
      console.log(!power, ': audio started') //!power because the original state prints instead of the current state
    } else {
      pwrLED.style.background = "#9B2226";
      pwrLED.style.boxShadow = "inset 0px -3px 3px #580e0e, inset 0px 1px 3px #DEE2E6, 0px 0px 0px #760508, 0px 0px 0px #760508"
      dispatch(togglePwr({ power: false }))
    }
  }

  const handleWaveform = (osc) => {
    let e = document.getElementById("waveform-select")
    let v = e.options[e.selectedIndex].value
    osc.oscillator.type = v
  }

  const synthArray = [
    { id: "AM", type: "AMSynth" },
    { id: "FM", type: "FMSynth" },
    { id: "Mb", type: "MembraneSynth" },
    { id: "Pl", type: "PluckSynth" }
  ]


  const now = Tone.now()
  let gainLevel = 0
  const gainNode = new Tone.Gain(gainLevel).toDestination()
  const osc = new Tone.PolySynth(Tone.Synth)

  const AMSynth = new Tone.AMSynth()
  const FMSynth = new Tone.FMSynth
  const MbSynth = new Tone.MembraneSynth
  const PlSynth = new Tone.PluckSynth

  const trem1 = new Tone.Tremolo(1, 0.75)
  const trem2 = new Tone.Tremolo(3, 0.75)
  const trem3 = new Tone.Tremolo(9, 0.75)
  const trem4 = new Tone.Tremolo(18, 0.75)

  const rvb1 = new Tone.Reverb(1)
  const rvb2 = new Tone.Reverb(2)
  const rvb3 = new Tone.Reverb(4)
  const rvb4 = new Tone.Reverb(5)


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
      osc.triggerAttack(note, now)
      domKey.style.backgroundColor = "#f57936"
      if ((domKey.className[4]) == "W") {
        domKey.style.height = "295px"
        domKey.style.boxShadow = "0px 0px 0px black, inset 2px 2px 2px black"
        domKey.style.color = "ivory"
      } else {
        domKey.style.height = "180px"
        domKey.style.boxShadow = "0px 1px 2px black;"
      }
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
        osc.triggerRelease()
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
      osc.triggerRelease(note)
      if ((domKey.className[4]) == "W") {
        domKey.style.backgroundColor = "ivory"
        domKey.style.color = "black"
        domKey.style.height = "300px"
        domKey.style.boxShadow = "inset 0px 2px 2px black, 0px 3px 3px black"
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
        osc.triggerAttack(note, now)
        key.style.backgroundColor = "#f57936"
        if ((key.className[4]) == "W") {
          key.style.color = "ivory"
          key.style.height = "295px"
          key.style.boxShadow = "0px 0px 0px black, inset 2px 2px 2px black"
        } else {
          key.style.height = "180px"
          key.style.boxShadow = "0px 1px 2px black;"
        }
      default:
        return
    }
  }

  //handle the mouse as an input
  const handleRelease = (e) => {
    let key = e.target
    let note = key.id
    osc.triggerRelease(note, now)
    if ((key.className[4]) == "W") {
      key.style.backgroundColor = "ivory"
      key.style.color = "black"
      key.style.height = "300px"
      key.style.boxShadow = "inset 0px 2px 2px black, 0px 3px 3px black"
    } else {
      key.style.backgroundColor = "black"
    }
  }

  let show = false
  const showNoteNames = (e) => {
    console.log(show)
    let id = e.target.id
    let showBtn = document.getElementById(id)
    let keyLabel = document.querySelectorAll("p.keyLabel")
    if (!show) {
      showBtn.style.position = "relative"
      showBtn.style.top = "0px"
      showBtn.style.backgroundColor = "#a01b1b"
      showBtn.style.boxShadow = "0px 5px 0px #580e0e, 0px 7px 1px #5e6368"
      showBtn.style.transition = "All 250ms ease"
      show = true
    } else {
      showBtn.style.position = "relative"
      showBtn.style.top = "5px"
      showBtn.style.backgroundColor = "#ff4608"
      showBtn.style.boxShadow = "inset 1px 2px 2px #07121b"
      showBtn.style.transition = "All 250ms ease"
      show = false
      keyLabel.forEach((label) => {
          if (label.parentElement.className[4] == "W") {
            label.style.color = "black"
          } else {
            label.style.color = "ivory"
          }
        })
    }

  }

  const efxBtnArray = [ 1, 2, 3, 4]
  const sqPresetArray = [1, 2, 3, 4, 5]
  const sqXArray = [1, 2, 3, 4, 5, 6, 7, 8]
  const sqYArray = ["A", "G", "E", "D", "C"]

  let oscOn = {
    'osc1': false,
    'osc2': false
  }
  const toggleOsc = (e) => {
    let id = e.target.id
    let toggle = document.getElementById(id)
    let waveform = document.getElementById(`${id.substr(0, 4)}Waveform`)
    if (oscOn[id]) {
      toggle.style.backgroundColor = "#a01b1b"
      oscOn[id] = false
      waveform.style.pointerEvents = "auto"
      waveform.style.color = "#13b307"
      gainNode.gain.rampTo(0, 0.3)
      console.log("off")
    } else {
      toggle.style.backgroundColor = "#ff4608"
      oscOn[id] = true
      waveform.style.pointerEvents = "none"
      waveform.style.color = "#5e6368"
      gainNode.gain.rampTo(1, 0.3)
      console.log("on")
    }
  }

  let rvbOn = {
    'rvb1': false,
    'rvb2': false,
    'rvb3': false,
    'rvb4': false
  }
  let activeRvb = ""
  const toggleRvb = (e) => {
    let id = e.target.id
    let toggle = document.getElementById(id)
    let toggledRvb = document.getElementById(activeRvb)
    if (rvbOn[id]) {
      toggle.style.backgroundColor = "#1b486d"
      rvbOn[id] = false
    } else {
      if (activeRvb != id && activeRvb != "") {
        rvbOn[activeRvb] = false
        toggledRvb.style.backgroundColor = "#1b486d"
        toggle.style.backgroundColor = "#008cff"
        rvbOn[id] = true
        activeRvb = id
        
      } else {
        toggle.style.backgroundColor = "#008cff"
        rvbOn[id] = true
        activeRvb = id
      }
      console.log(activeRvb)
    }
  }

  let tremOn = {
    'trem1': false,
    'trem2': false,
    'trem3': false,
    'trem4': false
  }
  let activeTrem = ""
  const toggleTrem = (e) => {
    let id = e.target.id
    let toggle = document.getElementById(id)
    let toggledTrem = document.getElementById(activeTrem)
    if (tremOn[id]) {
      toggle.style.backgroundColor = "#1b486d"
      tremOn[id] = false
    } else {
      if (activeTrem != id && activeTrem != "") {
        tremOn[activeTrem] = false
        toggledTrem.style.backgroundColor = "#1b486d"
        toggle.style.backgroundColor = "#008cff"
        tremOn[id] = true
        activeTrem = id
      } else {
        toggle.style.backgroundColor = "#008cff"
        tremOn[id] = true
        activeTrem = id
      }
      console.log(activeTrem)
    }
  }

  let presetOn = {
    'preset1': false,
    'preset2': false,
    'preset3': false,
    'preset4': false
  }
  let activePreset = ""
  const togglePreset = (e) => {
    let id = e.target.id
    let toggle = document.getElementById(id)
    let toggledPreset = document.getElementById(activePreset)
    if (presetOn[id]) {
      toggle.style.backgroundColor = "#bf6331"
      presetOn[id] = false
    } else {
      if (activePreset != id && activePreset != "") {
        presetOn[activePreset] = false
        toggledPreset.style.backgroundColor = "#bf6331"
        toggle.style.backgroundColor = "#ffa600"
        presetOn[id] = true
        activePreset = id
      } else {
        toggle.style.backgroundColor = "#ffa600"
        presetOn[id] = true
        activePreset = id
      }
      console.log(activePreset)
    }
  }

  let sqcBtnOn = {
    '1A': false, '2A': false, '3A': false, '4A': false, '5A': false, '6A': false, '7A': false, '8A': false,
    '1G': false, '2G': false, '3G': false, '4G': false, '5G': false, '6G': false, '7G': false, '8G': false,
    '1E': false, '2E': false, '3E': false, '4E': false, '5E': false, '6E': false, '7E': false, '8E': false,
    '1D': false, '2D': false, '3D': false, '4D': false, '5D': false, '6D': false, '7D': false, '8D': false,
    '1C': false, '2C': false, '3C': false, '4C': false, '5C': false, '6C': false, '7C': false, '8C': false,
  }
  const toggleSqcButton = (e) => {
    let id = e.target.id
    let btn = document.getElementById(id)
    if (sqcBtnOn[id]) {
      btn.style.backgroundColor = "#234b20"
      btn.style.boxShadow = "0px 5px 0px #07121b, 0px 7px 1px #5e6368"
      btn.style.top = "0px"
      sqcBtnOn[id] = false
    } else {
      btn.style.backgroundColor = "#13b307"
      btn.style.boxShadow = "inset 1px 2px 2px #07121b"
      btn.style.top = "5px"
      sqcBtnOn[id] = true
    }
  }

  let synthOn = {
    'AM': false,
    'FM': false,
    'Mb': false,
    'Pl': false
  }
  let activeSynth = ""
  const toggleSynth = (e) => {
    let id = e.target.id
    let toggle = document.getElementById(id)
    let toggledSynth = document.getElementById(activeSynth)
    if (synthOn[id]) {
      toggle.style.backgroundColor = "#a01b1b"
      synthOn[id] = false
    } else {
      if (activeSynth != id && activeSynth != ""){
        synthOn[activeSynth] = false
        toggledSynth.style.backgroundColor = "#a01b1b"
        toggle.style.backgroundColor = "#ff4608"
        synthOn[id] = true
        activeSynth = id
      } else {
        toggle.style.backgroundColor = "#ff4608"
        synthOn[id] = true
        activeSynth = id
      }
      console.log(activeSynth)
    }
  }





  return (
    <div id="tadlab-mini-container">
      <div id="spacer-left"></div>
      <div id="tadlab-mini-userinterface">
        <div id="spacer-above"></div>
        <div id="tadlab-mini-case" className="grain">
          <div id="tadlab-mini-controls">
            <div id="power">
              <div id="pwrSwitch">
                <p id="pwrLabel">on / off</p>
                <label className="switch" id="powerSwitch" onClick={handleToggle}>
                  <input type="checkbox" id="toggle" />
                  <span className="slider round" ></span>
                </label>
              </div>
              <div id="pwrLED" ></div>
            </div>
            <div id="oscillators" className="control-module">
              <div id="osc1" className="osc-container">
                <p>Oscillator-1</p>
                <div className="osc-inputs">
                  <select id="osc1Waveform" className="waveform-selectors">
                    <option name="sine" value="sine" className="waveform-option" onClick={() => handleWaveform(osc1)}>Sine</option>
                    <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
                    <option name="sawtooth" value="sawtooth" className="waveform-option" >Sawtooth</option>
                    <option name="square" value="square" className="waveform-option" >Square</option>
                  </select>
                  <div id="osc-btn-container" className="efx">
                    <button id="osc1Toggle" className="control-toggle" onClick={toggleOsc}>O|</button>
                  </div>
                </div>
              </div>
              <hr id="oscDivider" />
              <div id="osc2" className="osc-container">
                <p>Oscillator-2</p>
                <div className="osc-inputs">
                  <select id="osc2Waveform" className="waveform-selectors">
                    <option name="sine" value="sine" className="waveform-option" onClick={() => handleWaveform(osc2)}>Sine</option>
                    <option name="triangle" value="triangle" className="waveform-option" >Triangle</option>
                    <option name="sawtooth" value="sawtooth" className="waveform-option" >Sawtooth</option>
                    <option name="square" value="square" className="waveform-option" >Square</option>
                  </select>
                  <div id="osc-btn-container">
                    <button id="osc2Toggle" className="control-toggle" onClick={toggleOsc}>O|</button>
                  </div>
                </div>
              </div>
            </div>
            <div id="efx-container">
              <div id="reverb" className="efx-btn-container">
                {efxBtnArray.map((button) => {
                  return (
                    <div id="reverb-btn-container" className="efx">
                      <div className="efx-label">{button}</div>
                      <button id={`rvb${button}`} className="rvb-toggle" onClick={toggleRvb}>|R|</button>
                    </div>
                  )
                })}
              </div>
              <div id="tremelo" className="efx-btn-container">
                {efxBtnArray.map((button) => {
                  return (
                    <div id="tremelo-btn-container" className="efx">
                      <button id={`trem${button}`} className="rvb-toggle" onClick={toggleTrem}>|T|</button>
                      <div className="efx-label">{button}</div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div id="tadlab-mini-sequencer">
              <div id="sqc-container">
                <div id="sqc-presets" className="sqc-presets-container">
                  {sqPresetArray.map((button) => {
                    return (
                      <div id="sqc-btn-container" className="efx">
                        <button id={`preset${button}`} className="sqc-btn" onClick={togglePreset}>|{button}</button>
                      </div>
                    )
                  })}
                </div>
                <div id="sqc-matrix">
                  {sqXArray.map((row, i) => {
                    return (
                      <div className="column" bar={sqXArray[i]}>
                        {sqYArray.map((pitch) => {
                          return (
                            <div className="note" note={pitch}>
                              <button 
                                id={row + pitch}
                                className="sqc-btn matrix" 
                                onClick={toggleSqcButton}
                              >|{pitch}</button>
                            </div>
                          )}
                        )}
                      </div>
                    )}
                  )}
                </div>
              </div>
            </div>
          </div>

          <div id="tadlab-mini-keyboard">
            <div id="mod-container">
              <div id="synth-select-buttons">
                {synthArray.map((synth) => {
                  let id = synth.id
                  return (
                    <div id="sqc-btn-container" className="efx">
                      <button id={`${id}`} className="synth-btn" onClick={toggleSynth}>{id}</button>
                    </div>
                  )
                })}
              </div>
            </div>
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
                <label htmlFor="octave-btn-container">8ve</label>
                <div id="octave-btn-container"></div>
                <button id="octave-up" className="octave-btn" onClick={() => setOctave(octave + 1)}><b>+</b></button>
                <button id="octave-down" className="octave-btn" onClick={() => setOctave(octave - 1)}><b>-</b></button>
                <button id="note-names" className="show-notenames" onClick={showNoteNames}>C#</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TadlabMini