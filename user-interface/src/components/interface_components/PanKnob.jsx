import { useState } from 'react'
import { HighContrast } from 'react-dial-knob'

export const PanKnob = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <label
        id={'panLabel'}
        style={{
          fontSize: '10px',
          margin: '0'
        }}
      >
        Pan
      </label>
      <HighContrast
        diameter={30}
        min={-50}
        max={50}
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