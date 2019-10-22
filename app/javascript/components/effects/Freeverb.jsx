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
    let name = 'freeverb'
    const {
      effect,
      on,
      wet,
      toggleEffect,
      changeEffectWetValue,
      changeFreeverbDampening,
      changeFreeverbRoomSize
    } = this.props
    return (
      <div className="Effect">
        <div className="effectOn">
          <ToggleSwitch
            value="Freeverb"
            current={on}
            handleClick={toggleEffect}
          />
          <h1>Freeverb</h1>
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
             <p>Dampening</p>
             <Slider
               name={name}
               min="0"
               max="10"
               value={effect.dampening}
               handleValueChange={changeFreeverbDampening}
             />
          </div>
          <div className="slider">
             <p>Room Size</p>
             <Slider
               name={name}
               min="0"
               max="10"
               value={effect.roomSize}
               handleValueChange={changeFreeverbRoomSize}
             />
          </div>
        </div>
      </div>
    )
  }
}
