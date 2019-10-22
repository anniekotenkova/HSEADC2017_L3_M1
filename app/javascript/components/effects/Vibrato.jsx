import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class Vibrato extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'vibrato'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeVibratoDepth,
      changeVibratoFrequency,
      changeEffectValue,
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Vibrato"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>{name}</h1>
        </div>
        <div className="sliderBlock">
          <div className="slider">
              <div className="infoEffect">
                 <p>Wet</p>
                 <p className="effectValue">{effect.wet.value}</p>
              </div>
            <Slider
              name={name}
              min={0}
              max={1}
              value={effect.wet.value}
              handleValueChange={changeEffectWetValue}
            />
          </div>
          <div className="slider">
              <div className="infoEffect">
                 <p>Depth</p>
                 <p className="effectValue">{effect.depth.value}</p>
              </div>
            <Slider
              name={name}
              min={0}
              max={1}
              value={effect.depth.value}
              handleValueChange={changeVibratoDepth}
            />
          </div>
          <div className="slider">
              <div className="infoEffect">
                 <p>Frequency</p>
                 <p className="effectValue">{effect.frequency.value}</p>
              </div>
            <Slider
              name={name}
              min={0}
              max={100}
              value={effect.frequency.value}
              handleValueChange={changeVibratoFrequency}
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
