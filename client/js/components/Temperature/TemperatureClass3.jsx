import React from "react";
import TempValue from "./TempValue.jsx";
import SwapButton from "./SwapButton.jsx";
import {
  CELCIUS,
  convert,
  otherScale,
  summaryString
} from "./temperatureScale.js";
import cx from "classnames";
import { ThemeContext } from "./context.jsx";

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      scale: CELCIUS
    };
    this.handleDownClick = this.handleDownClick.bind(
      this
    );
    this.handleUpClick = this.handleUpClick.bind(
      this
    );
    this.handleSwapClick = this.handleSwapClick.bind(
      this
    );
  }

  componentDidMount() {
    document.title = summaryString(
      this.state.scale,
      this.state.temp
    );
  }

  componentDidUpdate() {
    document.title = summaryString(
      this.state.scale,
      this.state.temp
    );
  }

  handleDownClick(e) {
    const change =
      this.state.scale === CELCIUS
        ? 5
        : 9;
    this.setState({
      temp: this.state.temp - change
    });
  }

  handleUpClick(e) {
    const change =
      this.state.scale === CELCIUS
        ? 5
        : 9;
    this.setState({
      temp: this.state.temp + change
    });
  }

  handleSwapClick(e) {
    this.setState({
      temp: convert(
        this.state.scale,
        this.state.temp
      ),
      scale: otherScale(
        this.state.scale
      )
    });
  }

  render() {
    const change =
      this.state.scale === CELCIUS
        ? 5
        : 9;

    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div
              className={cx(
                "converter",
                theme
              )}
            >
              <TempValue
                label={this.state.scale}
              >
                <button
                  onClick={
                    this.handleDownClick
                  }
                >
                  -{change}
                </button>
                {this.state.temp}
                <button
                  onClick={
                    this.handleUpClick
                  }
                >
                  +{change}
                </button>
              </TempValue>
              <SwapButton
                onClick={
                  this.handleSwapClick
                }
              />
              <TempValue
                label={otherScale(
                  this.state.scale
                )}
              >
                {convert(
                  this.state.scale,
                  this.state.temp
                )}
              </TempValue>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
