export const VolumeKnob = () => {
  return (
    <div id="volumeKnob" className="range-slider">
      <p className="outputControlLabel">VOL</p>
      <input
        id="volumeSlider"
        className="input-range"
        orient="vertical"
        type="range"
        value="60"
        min="0"
        max="100"
        step="1"
      />
    </div>
  )
}