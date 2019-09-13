import React from "react";
import TempValue from "./TempValue.jsx";
import SwapButton from "./SwapButton.jsx";
import {
  CELCIUS,
  convert,
  otherScale,
  summaryString
} from "./temperatureScale.js";
import { ThemeContext } from "./context.jsx";
import cx from "classnames";

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);

    this.handleDownClick = this.handleDownClick.bind(this);
    this.handleUpClick = this.handleUpClick.bind(this);
    this.handleSwapChange = this.handleSwapChange.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      temp: 0,
      scale: CELCIUS,
      width: window.innerWidth
    };
  }

  componentDidMount() {
    document.title = summaryString(this.state.scale, this.state.temp);

    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = summaryString(this.state.scale, this.state.temp);
  }

  getChange() {
    return this.state.scale === CELCIUS ? 5 : 9;
  }

  handleResize(e) {
    this.setState({
      width: window.innerWidth
    });
  }

  handleDownClick(e) {
    this.setState({
      temp: this.state.temp - this.getChange()
    });
  }

  handleUpClick(e) {
    this.setState({
      temp: this.state.temp + this.getChange()
    });
  }

  handleSwapChange(e) {
    this.setState({
      scale: otherScale(this.state.scale),
      temp: convert(this.state.scale, this.state.temp)
    });
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <div
              className={cx("converter", theme, {
                "converter--vertical": this.state.width < 520
              })}
            >
              <TempValue label={this.state.scale}>
                <button onClick={this.handleDownClick}>
                  -{this.getChange()}
                </button>
                {this.state.temp}
                <button onClick={this.handleUpClick}>
                  +{this.getChange()}
                </button>
              </TempValue>
              <SwapButton onClick={this.handleSwapChange} />
              <TempValue label={otherScale(this.state.scale)}>
                {convert(this.state.scale, this.state.temp)}
              </TempValue>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
