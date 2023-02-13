import '../../../src/styling/interface/modulepanel.css'
import Mixer from '../tonejs/Mixer'


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