import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'bitCrusher'
    const {
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeBitCrusherValue
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="BitCrusher"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>BitCrusher</h1>
        </div>
        <div className="sliderBlock">
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
         <div className="slider">
            <p>Bits</p>
            <Slider
              name={name}
              min="1"
              max="8"
              value={effect.bitCrusher}
              handleValueChange={changeBitCrusherValue}
            />
         </div>
        </div>
      </div>
    )
  }
}
