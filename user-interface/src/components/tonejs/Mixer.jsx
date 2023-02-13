import * as Tone from 'tone'
import '../../../src/styling/interface/mixerpanel.css'

const main = new Tone.Gain().toDestination();

export const channel1 = new Tone.Channel().connect(main).toDestination()
// export const channel2 = new Tone.Channel().connect(main).toDestination()
// export const channel3 = new Tone.Channel().connect(main).toDestination()
// export const channel4 = new Tone.Channel().connect(main).toDestination()

const Mixer = () => {

  const ch1Level = () => {
    let lvl = document.getElementById("channel-1-fader").value
    channel1.volume.value = lvl
    console.log(lvl)
  }

  const ch1Pan = () => {
    let pan = document.getElementById("channel-1-pan").value
    channel1.pan.value = pan
  }

  // const ch2Level = () => {
  //   let lvl = document.getElementById("channel-1-fader").value
  //   channel2.volume.value = lvl
  // }

  // const ch2Pan = () => {
  //   let pan = document.getElementById("channel-1-pan").value
  //   channel2.pan.value = pan
  // }

  // const ch3Level = () => {
  //   let lvl = document.getElementById("channel-1-fader").value
  //   channel3.volume.value = lvl
  // }

  // const ch3Pan = () => {
  //   let pan = document.getElementById("channel-1-pan").value
  //   channel3.pan.value = pan
  // }

  // const ch4Level = () => {
  //   let lvl = document.getElementById("channel-1-fader").value
  //   channel4.volume.value = lvl
  // }

  // const ch4Pan = () => {
  //   let pan = document.getElementById("channel-1-pan").value
  //   channel4.pan.value = pan
  // }

  return (
    <div id="mixer-container">
      <div id="channel-1" className="fader-container">
        <label htmlFor="channel-1">Ch. 1</label>
        <input id="channel-1-fader" className="mixer-fader" type="range" min="-32" max="0" step="0.1" defaultValue="-10" onChange={ch1Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-1-pan" className="pan-fader" type="range" min="-1" max="1" step="0.1" onChange={ch1Pan} />
        </div>
        
      </div>
      {/* <div id="channel-2" className="fader-container">
        <label htmlFor="channel-2">Ch. 2</label>
        <input id="channel-2-fader" className="mixer-fader" type="range" min="0.1" max="10" step="0.1" onChange={ch2Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-2-pan" className="pan-fader" type="range" min="-1" max="1" step="0.1" onChange={ch2Pan} />
        </div>

      </div> */}
      {/* <div id="channel-3" className="fader-container">
        <label htmlFor="channel-3">Ch. 3</label>
        <input id="channel-3-fader" className="mixer-fader" type="range" min="0.1" max="10" step="0.1" onChange={ch3Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-3-pan" className="pan-fader" type="range" min="-1" max="1" step="0.1" onChange={ch3Pan} />
        </div>

      </div>
      <div id="channel-4" className="fader-container">
        <label htmlFor="channel-4">Ch. 4</label>
        <input id="channel-4-fader" className="mixer-fader" type="range" min="0.1" max="10" step="0.1" onChange={ch4Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-4-pan" className="pan-fader" type="range" min="-1" max="1" step="0.1" onChange={ch4Pan} />
        </div>

      </div>
      <div id="main" className="fader-container">
        <label htmlFor="main">Main</label>
        <div id="main-faders">
          <input id="main-fader-l" className="mixer-fader" type="range" min="-12" max="1" step="0.1" onChange={ch1Level} />
          <input id="main-fader-r" className="mixer-fader" type="range" min="-12" max="1" step="0.1" onChange={ch1Level} />
        </div>

      </div> */}
    </div>
  )

}

export default Mixer