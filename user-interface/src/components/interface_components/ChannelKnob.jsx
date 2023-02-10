export const ChannelKnob = () => {
  return (
    <div id="channelKnob" className="range-slider">
      <p className="outputControlLabel">M/S</p>
      <input
        id="channelSlider"
        className="input-range"
        orient="vertical"
        type="range"
        value="1"
        min="0"
        max="1"
        step="1"
      />
    </div>
  )
}