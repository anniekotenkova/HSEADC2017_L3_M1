import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    let name = 'distortion'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeDistortionValue,
      changeEffectValue
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Distortion"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>Distortion</h1>
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
            <p>Distortion Value</p>
            <Slider
              name={name}
              min="0"
              max="100"
              value={effect.distortion}
              handleValueChange={changeDistortionValue}
            />
          </div>

          <div className="slider">
            <p>Oversample</p>
            <ButtonSet
              name={name}
              property="oversample"
              set={set}
              value={effect.oversample}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>

      </div>
    )
  }
}
