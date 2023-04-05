import * as Tone from 'tone'

export const Sequencer = () => {
  const now = Tone.now()
  // const synth = new Tone.Synth().toDestination()
  const seq = new Tone.Sequence((time, note) => {
    synth.triggerAttackRelease(note, 0.1, time);
  }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
  Tone.Transport.start()

  return (
    <div id="sequencer-panel">
      <div id="grid-container">
        
      </div>
    </div>
  )
}
