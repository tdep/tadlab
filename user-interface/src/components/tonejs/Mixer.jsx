import * as Tone from 'tone'
import '../../../src/styling/interface/mixerpanel.css'

const Mixer = () => {

  const ch1Level = () => {

  }
  return (
    <div id="mixer-container">
      <div id="channel-1" className="fader-container">
        <label htmlFor="channel-1">Ch. 1</label>
        <input id="channel-1-fader" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-1-pan" className="pan-fader" type="range" min="-1" max="1" value="0" onChange={ch1Level} />
        </div>
        
      </div>
      <div id="channel-2" className="fader-container">
        <label htmlFor="channel-2">Ch. 2</label>
        <input id="channel-2-fader" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-2-pan" className="pan-fader" type="range" min="-1" max="1" value="0" onChange={ch1Level} />
        </div>

      </div>
      <div id="channel-3" className="fader-container">
        <label htmlFor="channel-3">Ch. 3</label>
        <input id="channel-3-fader" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-3-pan" className="pan-fader" type="range" min="-1" max="1" value="0" onChange={ch1Level} />
        </div>

      </div>
      <div id="channel-4" className="fader-container">
        <label htmlFor="channel-4">Ch. 4</label>
        <input id="channel-4-fader" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
        <div className="channel-btns">
          <button className="mixer-btns">S</button>
          <button className="mixer-btns">M</button>
        </div>
        <div className="pan-container">
          <input id="channel-4-pan" className="pan-fader" type="range" min="-1" max="1" value="0" onChange={ch1Level} />
        </div>

      </div>
      <div id="main" className="fader-container">
        <label htmlFor="main">Main</label>
        <div id="main-faders">
          <input id="main-fader-l" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
          <input id="main-fader-r" className="mixer-fader" type="range" min="0.1" max="10" onChange={ch1Level} />
        </div>

      </div>
    </div>
  )

}

export default Mixer