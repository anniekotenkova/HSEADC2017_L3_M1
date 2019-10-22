import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'tremolo'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeTremoloDepth,
      changeTremoloSpread,
      changeEffectValue,
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Tremolo"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>Tremolo</h1>
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
            <p>Depth</p>
            <Slider
              name={name}
              min="0"
              max="1"
              value={effect.depth.value}
              handleValueChange={changeTremoloDepth}
            />
          </div>
          <div className="slider">
            <p>Frequency</p>
            <Slider
              name={name}
              min="0"
              max="180"
              value={effect.spread.value}
              handleValueChange={changeTremoloSpread}
            />
          </div>
        </div>
        <div className="slider">
          <p>Type</p>
          <ButtonSet
            name={name}
            property="type"
            set={set}
            value={effect.type}
            handleValueChange={changeEffectValue}
          />
        </div>
      </div>
    )
  }
}
