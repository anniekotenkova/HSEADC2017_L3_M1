import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Chebyshev extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    let name = 'chebyshev'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue,
      changeChebyshevOrder
    } = this.props

    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Chebyshev"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>Chebyshev</h1>
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
            <p>Order</p>
            <Slider
              name={name}
              min="1"
              max="100"
              value={effect.order}
              handleValueChange={changeChebyshevOrder}
            />
          </div>
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
    )
  }
}
