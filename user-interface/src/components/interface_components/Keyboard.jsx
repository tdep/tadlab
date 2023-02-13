import '../../../src/styling/interface/keyboard.css'
import { Keys } from './Keys'

const Keyboard = () => {
  const whiteKey = {
    id: "",
    name: "",
    note: ""
  }


  return (
    <div id="keys">
      <Keys />
      <Keys />
      <Keys />
      <div className="cToEWhite">8</div>
    </div>
  )

}

export default Keyboard