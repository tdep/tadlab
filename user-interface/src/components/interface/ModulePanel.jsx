import OscillatorPanel from "./OscillatorPanel"
import ADSRContainer from "./ADSRContainer"
import EFXContainer from "./EFXContainer"
import KludgeContainer from "./KludgeContainer"
import OutputContainer from "./OutputContainer"

import '../../../src/styling/interface/modulepanel.css'

const ModulePanel = () => {

  return (
    <>
      <div id="modulePanel">
        <OscillatorPanel />
        <ADSRContainer />
        <EFXContainer />
        <KludgeContainer />
        <OutputContainer />
      </div>
    </>
  )
}

export default ModulePanel