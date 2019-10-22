import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class StereoWidener extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    let name = 'stereoWidener'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue,
      changeStereoWidenerWidth
    } = this.props

    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="StereoWidener"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>StereoWidener</h1>
        </div>
        <div className="sliderBlock">
          <div className="slider">
            <p>Wet</p>
            <Slider
              name={name}
              min="0"
              max="1"
              value={effect.wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>
          <div className="slider">
            <p>Width</p>
            <Slider
              name={name}
              min="0"
              max="1"
              value={effect.width.value}
              handleValueChange={changeStereoWidenerWidth}
            />
          </div>
        </div>
      </div>
    )
  }
}
