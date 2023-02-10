import * as Tone from 'tone'
import { PowerSwitch } from '../interface_components/PowerSwitch'
import { VolumeKnob } from '../interface_components/VolumeKnob'
import { PanKnob } from '../interface_components/PanKnob'
import '../../../src/styling/interface/modulepanel.css'
import { ChannelKnob } from '../interface_components/ChannelKnob'


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
            <VolumeKnob />
          </div>
          <div id="pan">
            <PanKnob />
          </div>
          <div id="channelType">
            <ChannelKnob />          
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