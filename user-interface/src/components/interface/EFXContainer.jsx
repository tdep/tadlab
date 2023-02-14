import { Reverb } from '../tonejs/Reverb'
import { Tremelo } from '../tonejs/Tremelo'
import { BitCrusher } from '../tonejs/BitCrusher'
import '../../../src/styling/interface/modulepanel.css'


const EFXContainer = () => {
  return (
    <div id="efxPanel">
      <div id="reverbContainer">
        <Reverb />
      </div>
      <div id="tremContainer">
        <Tremelo />
      </div>
      <div id="delayContainer">
        <BitCrusher />
      </div>

    </div>
  )
}

export default EFXContainer