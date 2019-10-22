import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import BpmSlider from '../controls/BpmSlider'
import Knob from '../controls/Knob'

export default class PingPongDelay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      name,
      effect,
      on,
      wet,
      changeEffectWetValue,
      toggleEffect,
      changeDelayTimePingPong,
    } = this.props

    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="PingPongDelay"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>PingPong Delay</h1>
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
          <div className="knob">
            <p>Delay Time</p>
              <Knob
                name={name}
                min="0"
                max="1"
                value={effect.delayTime.value}
                handleValueChange={changeDelayTimePingPong}
              />
          </div>
        </div>
      </div>
    )
  }
}
