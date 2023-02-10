import * as Tone from 'tone'
import { PowerSwitch } from '../interface_components/PowerSwitch'

import '../../../src/styling/interface/modulepanel.css'


const OutputContainer = () => {


  return (
    <div id="outputPanel">
      <div id="vuMeterContainer">

      </div>
      <div id="oscilloscopeContainer">

      </div>
      <div id="controlContainer">
        <div id="outputControls">
          <div id="volume">

          </div>
          <div id="pan">

          </div>
          <div id="channelType">

          </div>
        </div>
        <div id="indicatorsAndSwitch" >
          <div id="power">
            <p id="pwrLabel">off / on</p>
            <PowerSwitch />
            <div id="pwrLED" ></div>
          </div>
          <div id="outputSignal">
            <p className="signalLabel">Signal</p>
            <div className="signalLED" id="outputSignalLED"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutputContainer