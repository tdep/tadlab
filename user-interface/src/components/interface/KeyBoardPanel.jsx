import Keyboard from '../interface_components/Keyboard'
import '../../../src/styling/interface/keyboardpanel.css'

const KeyBoardPanel = () => {
  return (
    <div id="keyboardPanel">
      <div id="modPanel">
        <div id="controls">
          <div id="pitchBendContainer">

          </div>
          <div id="modWheelContainer">

          </div>
        </div>
        <div id="namePlate">
          <h1>TAD-LAB 3b</h1>
        </div>
      </div>
      <div id="keyboard">
        <Keyboard />
      </div>
    </div>
  )
}

export default KeyBoardPanel