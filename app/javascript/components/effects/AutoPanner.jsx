import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class AutoPanner extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    let name = 'autoPanner'

    const {
      effect,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoPannerDepth,
      changeAutoPannerFrequency,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="AutoPanner"
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
              value={effect.wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>
          <div className="slider">
            <div className="infoEffect">
               <p>Frequency</p>
               <p className="effectValue">{effect.frequency.value}</p>
            </div>
            <Slider
              name={name}
              property="frequency.value"
              min={0}
              max={100}
              value={effect.frequency.value}
              handleValueChange={changeAutoPannerFrequency}
            />
          </div>

          <div className="slider">
            <div className="infoEffect">
               <p>Depth</p>
               <p className="effectValue">{effect.depth.value}</p>
            </div>
            <Slider
              name={name}
              property="depth.value"
              min={0}
              max={1}
              on={on}
              value={effect.depth.value}
              handleValueChange={changeAutoPannerDepth}
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
