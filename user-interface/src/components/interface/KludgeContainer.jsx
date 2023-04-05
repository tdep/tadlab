import { Sequencer } from '../tonejs/Sequencer'
import Mixer from '../tonejs/Mixer'
import '../../../src/styling/interface/modulepanel.css'

const KludgeContainer = () => {
  return (
    <div id="kludgePanel">
      <div id="stepSequencerContainer">

      </div>
      <div id="mixerPanel">
        <Mixer />
      </div>
    </div>
  )
}

export default KludgeContainer