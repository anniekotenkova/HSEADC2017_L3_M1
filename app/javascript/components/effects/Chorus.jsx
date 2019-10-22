import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    let name = 'chorus'
    const {
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeChorusValue,
      changeChorusFrequency
    } = this.props

    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Chorus"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>Chorus</h1>
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
             <p>Delay Time</p>
             <Slider
               name={name}
               min="0"
               max="100"
               value={effect.delayTime.value}
               handleValueChange={changeChorusValue}
             />
          </div>
          <div className="slider">
             <p>Frequency</p>
             <Slider
               name={name}
               min="0"
               max="100"
               value={effect.frequency}
               handleValueChange={changeChorusFrequency}
             />
          </div>
        </div>
      </div>
    )
  }
}
