import { ADSR } from '../tonejs/ADSR'
import '../../../src/styling/interface/modulepanel.css'


const ADSRContainer = () => {
  return (
    <div id="adsrPanel">
      <div id="adsr-1-container">
        <ADSR />
      </div>
      <div id="adsr-2-container">
        <ADSR />
      </div>
    </div>
  )
}

export default ADSRContainer