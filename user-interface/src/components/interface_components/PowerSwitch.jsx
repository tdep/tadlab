import { togglePwr } from '../../features/interfaceSlice'
import { useDispatch, useSelector } from 'react-redux'
import * as Tone from 'tone'
import '../../../src/styling/interface/knobsandbuttons.css'

export const PowerSwitch = () => {
  const dispatch = useDispatch()

  const power = useSelector(state => state.interface.value.power)


  const handleToggle = async () => {
    let checkBox = document.getElementById('toggle')
    let pwrLED = document.getElementById('pwrLED')
    if (checkBox.checked == true) {
      pwrLED.style.background = "#f20c13";
      dispatch(togglePwr({ power: true }))
      await Tone.start()
      console.log(!power,': audio started') //!power because the original state prints instead of the current state
    } else {
      pwrLED.style.background = "#9B2226";
      dispatch(togglePwr({ power: false }))
    }
  }
  
  return (
    <>
      <label className="switch" id="powerSwitch" onClick={handleToggle}>
        
        <input type="checkbox" id="toggle"/>
        <span className="slider round" ></span>
      </label>
    </>
  )
}