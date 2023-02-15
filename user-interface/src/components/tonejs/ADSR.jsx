import '../../../src/styling/interface/adsr.css'

export const ADSR = () => {
  return (
    <div id="adsr-panel">
      <div id="adsr-sliders">
        <label htmlFor="attack">Attack</label>
        <input id="attack" type="range" min="0" max="10" /> 
        <label htmlFor="decay" >Decay</label>
        <input id="decay" type="range" min="0" max="10" /> 
        <label htmlFor="sustain">Sustain</label>
        <input id="sustain" type="range" min="0" max="10" /> 
        <label htmlFor="release">Release</label>
        <input id="release" type="range" min="0" max="10" /> 
      </div>

    </div>
  )
}