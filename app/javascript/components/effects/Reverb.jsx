import React from 'react'

import Slider from '../controls/Slider'
import ToggleSwitch from '../controls/ToggleSwitch'
import PlaySwitch from '../controls/PlaySwitch'
import Knob from '../controls/Knob'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'reverb'
    const {
      effect,
      on,
      changeEffectWetValue,
      changeDecayReverb,
      changePreDelayReverb,
      toggleEffect,
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            current={on}
            handleClick={toggleEffect}
            value="Reverb"
          />
          <h1>{name}</h1>
        </div>
        <div className="slider">
          <p>Wet</p>
          <Slider
            name={name}
            min="0"
            max="1"
            value={effect.wet.value}
            handleValueChange={changeEffectWetValue}
          />
        </div>
        <div className="knobList">
          <div className="knobform">
            <p>Decay</p>
            <Knob
              min="0"
              max="100"
              value={effect.decay}
              handleValueChange={changeDecayReverb}
            />
          </div>
          <div className="knobform">
            <p>PreDelay</p>
            <Knob
              min="0"
              max="100"
              value={effect.preDelay}
              handleValueChange={changePreDelayReverb}
            />
          </div>
        </div>
      </div>
    )
  }
}
