import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./NumberSliderComponent"; // example render components - source below

const sliderStyle = {
  position: "relative",
  width: "100%",
  marginTop: -5
};

const railStyle = {
  position: "absolute",
  width: "100%",
  height: 8,
  borderRadius: 4,
  cursor: "pointer",
  backgroundColor: "rgb(100,100,100)"
};

const domain = [100, 500];
const defaultValues = [1, 400];

class PriceSlider extends Component {
  state = {
    values: defaultValues.slice(),
    update: defaultValues.slice()
  };

  onUpdate = update => {
    this.setState({ update })
    console.log(update);
  }

  onChange = values => {
    this.setState({ values })
  }
  render() {
    return (
      <div style={{ margin: "0%", width: "100%" }}>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onUpdate={this.onUpdate}
          onChange={this.onChange}
          values={defaultValues}
        >
          <Rail>
            {({ getRailProps }) => (
              <div style={railStyle} {...getRailProps()} />
            )}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          <Ticks count={5}>
            {({ ticks }) => (
              <div className="slider-ticks">
                {ticks.map(tick => (
                  <Tick key={tick.id} tick={tick} count={ticks.length} />
                ))}
              </div>
            )}
          </Ticks>
        </Slider>
      </div>
    );
  }
}

export default PriceSlider;