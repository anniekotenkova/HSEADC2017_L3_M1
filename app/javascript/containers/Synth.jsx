import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import Slider from '../components/controls/Slider'
import ToggleSwitch from '../components/controls/ToggleSwitch'
import PlaySwitch from '../components/controls/PlaySwitch'
import Knob from '../components/controls/Knob'

import Chorus from '../components/effects/Chorus'
import Reverb from '../components/effects/Reverb'
// import AutoFilter from '../components/effects/AutoFilter'
import AutoPanner from '../components/effects/AutoPanner'
// import AutoWah from '../components/effects/AutoWah'
import BitCrusher from '../components/effects/BitCrusher'
import Chebyshev from '../components/effects/Chebyshev'
import Distortion from '../components/effects/Distortion'
import FeedbackDelay from '../components/effects/FeedbackDelay'
// import FeedbackEffect from '../components/effects/FeedbackEffect'
import Freeverb from '../components/effects/Freeverb'
// import JcReverb from '../components/effects/JcReverb'
// import Phaser from '../components/effects/Phaser'
// import PingPongDelay from '../components/effects/PingPongDelay'
// import PitchShift from '../components/effects/PitchShift'
import StereoWidener from '../components/effects/StereoWidener'
import Tremolo from '../components/effects/Tremolo'
import Vibrato from '../components/effects/Vibrato'



export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    // Sequencer with effects
    const defaultValue = 0

    let synth = new Tone.PolySynth(
      {
        polyphony : 4 ,
        volume : 0 ,
        detune : 0 ,
        voice : Tone.Synth
      }
    )

    let autoFilter = new Tone.AutoFilter()
    let feedbackDelay = new Tone.FeedbackDelay()
    let tremolo = new Tone.Tremolo()
    let distortion = new Tone.Distortion()
    let autoPanner = new Tone.AutoPanner()
    let autoWah = new Tone.AutoWah()
    let bitCrusher = new Tone.BitCrusher()
    let chebyshev = new Tone.Chebyshev()
    let chorus = new Tone.Chorus()
    let convolver = new Tone.Convolver()
    let effect = new Tone.Effect()
    let feedbackEffect = new Tone.FeedbackEffect()
    let freeverb = new Tone.Freeverb()
    let jcReverb = new Tone.JCReverb()
    let phaser = new Tone.Phaser()
    let pingPongDelay = new Tone.PingPongDelay()
    let pitchShift = new Tone.PitchShift()
    let reverb = new Tone.Reverb()
    let stereoWidener = new Tone.StereoWidener()
    let vibrato = new Tone.Vibrato()

    autoFilter.wet.value = 0
    autoPanner.wet.value = 0
    autoWah.wet.value = 0
    bitCrusher.wet.value = 0
    chebyshev.wet.value = 0
    chorus.wet.value = 0
    convolver.wet.value = 0
    distortion.wet.value = 0
    effect.wet.value = 0
    feedbackDelay.wet.value = 0
    feedbackEffect.wet.value = 0
    freeverb.wet.value = 0
    jcReverb.wet.value = 0
    phaser.wet.value = 0
    pingPongDelay.wet.value = 0
    pitchShift.wet.value = 0
    reverb.wet.value = 0
    stereoWidener.wet.value = 0
    tremolo.wet.value = 0
    vibrato.wet.value = 0

    synth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      effect,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    let loop2 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('E#4', '0.3', time)
    }, '1.2')

    let loop3 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C4', '0.3', time) }, '0.3')

    let loop4 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease(['G4', 'D#3', 'D#2'], '3', time)
    }, '0.3')

    //part of SYNTH
    let partSynth = new Tone.DuoSynth( {
      vibratoAmount : 0.5 ,
      vibratoRate : 5 ,
      harmonicity : 1.5 ,
      voice0 : {
        volume : -10 ,
        portamento : 0 ,
        oscillator : {
          type : 'sine'
        } ,
        filterEnvelope : {
          attack : 0.01 ,
          decay : 0 ,
          sustain : 1 ,
          release : 0.5
        } ,
        envelope : {
          attack : 0.01 ,
          decay : 0 ,
          sustain : 1 ,
          release : 0.5
        }
      } ,
      voice1 : {
        volume : -10 ,
        portamento : 0 ,
        oscillator : {
          type : 'sine'
        } ,
        filterEnvelope : {
          attack : 0.01 ,
          decay : 0 ,
          sustain : 1 ,
          release : 0.5
        } ,
        envelope : {
          attack : 0.01 ,
          decay : 0 ,
          sustain : 1 ,
          release : 0.5
        }
      }
    })

    partSynth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      effect,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    let part = new Tone.Part(
      function(time, event) {
        partSynth.triggerAttackRelease(event.note, event.dur, time)
      },
        [
        {
          time: '0:1:1',
          note: 'G#3',
          velocity: 95,
          dur: '0.2'
        },
        {
          time: '0:1:2',
          note: 'G3',
          velocity: 95,
          dur: '0.2'
        },
        {
          time: '0:1:2:1',
          note: 'C3',
          velocity: 95,
          dur: '0.2'
        },
        {
          time: '0:1:3',
          note: 'C3',
          velocity: 95,
          dur: '0.6'
        },
        {
          time: '0:1:6',
          note: 'C3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:2:1',
          note: 'C3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:2:1',
          note: 'C3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:2:1:1',
          note: 'C#3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:2:2:1',
          note: 'C#3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:2:4',
          note: 'C#3',
          velocity: 95,
          dur: '0.3'
        },
        {
          time: '0:3:1',
          note: 'C#3',
          velocity: 95,
          dur: '0.6'
        },

      ]
    )

    part.loop = true
    part.loopEnd = '0:3:1'


    this.state = {
      autoFilter: {
        name: 'autoFilter',
        effect: autoFilter,
        wet: 0,
        on: false
      },
      autoPanner: {
        name: 'autoPanner',
        effect: autoPanner,
        wet: 0,
        on: false
      },
      autoWah: {
        name: 'autoWah',
        effect: autoWah,
        wet: 0,
        on: false
      },
      bitCrusher: {
        name: 'bitCrusher',
        effect: bitCrusher,
        wet: 0,
        on: false
      },
      chebyshev: {
        name: 'chebyshev',
        effect: chebyshev,
        wet: 0,
        on: false
      },
      chorus: {
        name: 'chorus',
        effect: chorus,
        wet: 0,
        on: false,
        frTemp: 0
      },
      convolver: {
        name: 'convolver',
        effect: convolver,
        wet: 0,
        on: false
      },
      distortion: {
        name: 'distortion',
        effect: distortion,
        wet: 0,
        on: false
      },
      effect: {
        name: 'effect',
        effect: effect,
        wet: 0,
        on: false
      },
      feedbackDelay: {
        name: 'feedbackDelay',
        effect: feedbackDelay,
        wet: 0,
        on: false
      },
      feedbackEffect: {
        name: 'feedbackEffect',
        effect: feedbackEffect,
        wet: 0,
        on: false
      },
      freeverb: {
        name: 'freeverb',
        effect: freeverb,
        wet: 0,
        on: false
      },
      jcReverb: {
        name: 'jcReverb',
        effect: jcReverb,
        wet: 0,
        on: false
      },
      phaser: {
        name: 'phaser',
        effect: phaser,
        wet: 0,
        on: false
      },
      pingPongDelay: {
        name: 'pingPongDelay',
        effect: pingPongDelay,
        wet: 0,
        on: false
      },
      pitchShift: {
        name: 'pitchShift',
        effect: pitchShift,
        wet: 0,
        on: false
      },
      reverb: {
        name: 'reverb',
        effect: reverb,
        wet: 0,
        on: false
      },
      stereoWidener: {
        name: 'stereoWidener',
        effect: stereoWidener,
        wet: 0,
        on: false
      },
      tremolo: {
        name: 'tremolo',
        effect: tremolo,
        wet: 0,
        on: false,
      },
      vibrato: {
        name: 'vibrato',
        effect: vibrato,
        wet: 0,
        on: false
      },
      synth: {
        instrument: synth,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      loop3: {
        loop: loop3,
        on: false
      },
      loop4: {
        loop: loop4,
        on: false
      },
      partSynth: {
        instrument: partSynth,
        on: false
      },
      part,
      tempo: 60,
      volume: 60,
      lastChange: Date.now(),
    }

    _.bindAll(
      this,
      'toggleLoop',
      'togglePart',
      'changeEffectWetValue',
      'changeFrequencyChorus',
      'changeDistortionValue',
      'changeBitCrusherValue',
      'changeChorusValue',
      'changeChorusFrequency',
      'changeFreeverbDampening',
      'changeFreeverbRoomSize',
      'changeVibratoFrequency',
      'changeVibratoDepth',
      'changeEffectValue',
      'changeChebyshevOrder',
      'changeAutoPannerDepth',
      'changeAutoPannerFrequency',
      'changeStereoWidenerWidth',
      'bpmChange',
      'volumeChange',
      'toggleEffect',
    )
  }



  bpmChange(value) {
    let { tempo } = this.state
    tempo = Math.round(value)
    Tone.Transport.bpm.value = tempo


    this.setState({
      tempo: tempo
    })
  }

  volumeChange(value) {
    let { volume } = this.state
    volume = Math.round(value)
    Tone.Master.volume.value = volume
    console.log('volume value:', Tone.Master.volume.value)

    this.setState({
      volume: volume
    })
  }

  // def SYNTH
  toggleLoop(loopName) {
    let { tempo } = this.state
    let { volume } = this.state
    let { loop, on } = this.state[loopName]

    on ? loop.stop() : loop.start('0m')

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })

    Tone.Transport.bpm.value = tempo
    Tone.Master.volume.value = volume
    Tone.Transport.start()
  }

  togglePart() {
    let { partSynth, part, tempo, volume } = this.state
    let { on } = partSynth

    on ? part.stop() : part.start()

    this.setState({
      partSynth: {
        on: !on
      }
    })

    Tone.Transport.bpm.value = tempo
    Tone.Master.volume.value = volume
    Tone.Transport.start()
    console.log('BPM NOW:', Tone.Transport.bpm.value)
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]
    effect.wet.value = on ? value.toFixed(1) : value.toFixed(1)

    wet = value

    this.setState({
      [`${effectName}`]: { effect, wet, on }
    })
  }

  changeBitCrusherValue(effectName, value) {
    let { effect, wet, on } = this.state.bitCrusher

    effect.bits = value.toFixed(1)

    this.setState({
      bitCrusher: {
        effect,
        wet,
        on
      }
    })
  }

  changeChorusValue(effectName, value) {
    let { effect, wet, on } = this.state.chorus

    effect.delayTime = value.toFixed(1)

    this.setState({
      chorus: {
        effect,
        wet,
        on
      }
    })
  }

  changeFreeverbDampening(effectName, value) {
    let { effect, wet, on } = this.state.freeverb

    effect.dampening.value = value.toFixed(1)

    this.setState({
      freeverb: {
        effect,
        wet,
        on
      }
    })
  }

  changeFreeverbRoomSize(effectName, value) {
    let { effect, wet, on } = this.state.freeverb

    effect.roomSize.value = value.toFixed(1)

    this.setState({
      freeverb: {
        effect,
        wet,
        on
      }
    })
  }

  changeChorusFrequency(effectName, value) {
    let { effect, wet, on } = this.state.chorus

    effect.frequency.value = value.toFixed(1)

    this.setState({
      chorus: {
        effect,
        wet,
        on
      }
    })
  }

  changeDistortionValue(effectName, value) {
    let { effect, wet, on } = this.state.distortion

    effect.distortion = value.toFixed(1)

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  changeFrequencyChorus(value) {
    let { effect, frTemp, on } = this.state.chorus
    effect.frequency.value = value
    console.log(effect.frequency.value)

    this.setState({
      chorus: { effect, on }
    })
  }

  changeFeedbackDelayValue(effectName, value) {
    let { effect, wet, on } = this.state.feedbackDelay

    effect.maxDelay = value

    this.setState({
      feedbackDelay: {
        effect,
        wet,
        on
      }
    })
  }

  changeVibratoDepth(effectName, value) {
    let { effect, wet, on } = this.state.vibrato

    effect.depth.value =  value.toFixed(1)

    this.setState({
      vibrato: {
        effect,
        wet,
        on
      }
    })
  }

  changeVibratoFrequency(effectName, value) {
    let { effect, wet, on } = this.state.vibrato

    effect.frequency.value =  value.toFixed(1)

    this.setState({
      vibrato: {
        effect,
        wet,
        on
      }
    })
  }

  changeChebyshevOrder(effectName, value) {
    let { effect, wet, on } = this.state.chebyshev

    effect.order = value.toFixed(1)

    this.setState({
      chebyshev: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoPannerFrequency(effectName, value) {
    let { effect, wet, on } = this.state.autoPanner

    effect.frequency.value =  value.toFixed(1)

    this.setState({
      autoPanner: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoPannerDepth(effectName, value) {
    let { effect, wet, on } = this.state.autoPanner

    effect.depth.value =  value.toFixed(1)

    this.setState({
      autoPanner: {
        effect,
        wet,
        on
      }
    })
  }

  changeStereoWidenerWidth(effectName, value) {
    let { effect, wet, on } = this.state.stereoWidener

    effect.width.value =  value.toFixed(1)

    this.setState({
      stereoWidener: {
        effect,
        wet,
        on
      }
    })
  }

  toggleEffect(effectName) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: { effect, wet, on }
    })
  }

  changeEffectValue(effectName, effectProperty, value) {
    let { name, effect, wet, on } = this.state[effectName]

    if (effectProperty == 'order') {
      value = Math.round(value)
    }

    effect[effectProperty] = value

    this.setState({
      [`${effectName}`]: {
        name,
        effect,
        wet,
        on
      }
    })
  }

  render() {
    let {
      tempo,
      volume,
      chorus,
      synth,
      partSynth,
      loop2,
      loop3,
      loop4
    } = this.state
    let { toggleEffect } = this
    return (
      <section className="synthBody">
        <div className="startBlock">
          <h1  className="titleBlock"> Get started making music</h1>
          <p className="infoBlock">Press the buttons below to play <em> presets </em></p>
          <div className="Loops">
            <div className="loopBlock" >
              <PlaySwitch
                name="play"
                value={partSynth.on}
                handleToggleClick={this.togglePart}
              />
            </div>
            <div className="loopBlock" >
              <PlaySwitch
                name="play"
                value={loop2.on}
                handleToggleClick={() => this.toggleLoop('loop2')}
              />
            </div>
            <div className="loopBlock" >
              <PlaySwitch
                name="play"
                value={loop3.on}
                handleToggleClick={() => this.toggleLoop('loop3')}
              />
            </div>
            <div className="loopBlock" >
              <PlaySwitch
                name="play"
                value={loop4.on}
                handleToggleClick={() => this.toggleLoop('loop4')}
              />
            </div>
          </div>
          <p className="infoBlock">Here you can find some basic settings. You can change loop <em> BPM </em> and volume</p>
          <div className="setValue">
            <div className="knobValue">
              <Knob
                min={0}
                max={220}
                value={tempo}
                handleValueChange={this.bpmChange}
              />
              <p>{tempo} BPM</p>
            </div>
            <div className="knobValue">
              <Knob
                min={0}
                max={100}
                value={volume}
                handleValueChange={this.volumeChange}
              />
              <p>{volume} Vol.</p>
            </div>
          </div>
        </div>
        <div className="effectsBlock">

          <BitCrusher
            {...this.state.bitCrusher}
            toggleEffect={() => toggleEffect('bitCrusher')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeBitCrusherValue={this.changeBitCrusherValue}
          />

          <Chorus
            {...this.state.chorus}
            changeEffectWetValue={this.changeEffectWetValue}
            changeChorusFrequency={this.changeChorusFrequency}
            changeChorusValue={this.changeChorusValue}
            toggleEffect={() => toggleEffect('chorus')}
          />

          <Distortion
            {...this.state.distortion}
            changeEffectWetValue={this.changeEffectWetValue}
            changeDistortionValue={this.changeDistortionValue}
            changeEffectValue={this.changeEffectValue}
            toggleEffect={() => toggleEffect('distortion')}
          />

          <Freeverb
            {...this.state.freeverb}
            changeEffectWetValue={this.changeEffectWetValue}
            changeFreeverbDampening={this.changeFreeverbDampening}
            changeFreeverbRoomSize={this.changeFreeverbRoomSize}
            toggleEffect={() => toggleEffect('freeverb')}
          />

          <Vibrato
            {...this.state.vibrato}
            changeEffectWetValue={this.changeEffectWetValue}
            changeVibratoDepth={this.changeVibratoDepth}
            changeVibratoFrequency={this.changeVibratoFrequency}
            changeEffectValue={this.changeEffectValue}
            toggleEffect={() => toggleEffect('vibrato')}
          />

          <Chebyshev
            {...this.state.chebyshev}
            changeEffectWetValue={this.changeEffectWetValue}
            changeChebyshevOrder={this.changeChebyshevOrder}
            changeEffectValue={this.changeEffectValue}
            toggleEffect={() => toggleEffect('chebyshev')}
          />

          <AutoPanner
            {...this.state.autoPanner}
            changeEffectWetValue={this.changeEffectWetValue}
            changeAutoPannerFrequency={this.changeAutoPannerFrequency}
            changeAutoPannerDepth={this.changeAutoPannerDepth}
            changeEffectValue={this.changeEffectValue}
            toggleEffect={() => toggleEffect('autoPanner')}
          />

          <StereoWidener
            {...this.state.stereoWidener}
            changeEffectWetValue={this.changeEffectWetValue}
            changeStereoWidenerWidth={this.changeStereoWidenerWidth}
            toggleEffect={() => toggleEffect('stereoWidener')}
          />
        </div>
      </section>
    )
  }
}
