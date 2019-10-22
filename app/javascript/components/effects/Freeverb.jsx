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
               min="0"
               max="1"
               value={effect.wet.value}
               handleValueChange={changeEffectWetValue}
             />
          </div>
          <div className="slider">
            <div className="infoEffect">
               <p>Dampening</p>
               <p className="effectValue">{effect.dampening.value}</p>
            </div>
             <Slider
               name={name}
               min="0"
               max="3000"
               value={effect.dampening.value}
               handleValueChange={changeFreeverbDampening}
             />
          </div>
          <div className="slider">
            <div className="infoEffect">
               <p>Room Size</p>
               <p className="effectValue">{effect.roomSize.value}</p>
            </div>
             <Slider
               name={name}
               min={0}
               max={1}
               value={effect.roomSize.value}
               handleValueChange={changeFreeverbRoomSize}
             />
          </div>
        </div>
      </div>
    )
  }
}
