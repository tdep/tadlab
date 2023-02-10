export const PanKnob = () => {
  return (
    <div id="panKnob" className="range-slider">
      <p className="outputControlLabel">PAN</p>
      <input
        id="panSlider"
        className="input-range"
        orient="vertical"
        type="range"
        value="0"
        min="-1"
        max="1"
        step="0.1"
      />
    </div>
  )
}