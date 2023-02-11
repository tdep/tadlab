import { useState } from 'react'
import { HighContrast } from 'react-dial-knob'

export const VolumeKnob = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <label 
        id={'volLabel'}
        style={{
          fontSize: '10px',
          margin: '0'
        }}
      >
        Vol
      </label>
      <HighContrast
        diameter={30}
        min={0}
        max={100}
        step={1}
        jumpLimit={0.1}
        value={value}
        theme={{
          defaultColor: "#184e77",
          activeColor: "#1A759F"
        }}
        style={{
          position: 'relative',
          margin: '0px auto',
          width: '30px'
        }}
        onValueChange={setValue}
        arialLabelledBy={'volLabel'}
        spaceMaxFromZero={false}
      >
      </HighContrast>
    
    </>
  )
}