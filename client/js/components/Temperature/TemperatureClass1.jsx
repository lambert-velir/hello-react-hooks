import React from "react";
import TempValue from "./TempValue.jsx";
import {
  CELCIUS,
  FAHRENHEIT,
  convert
} from "./temperatureScale.js";

export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0
    };
  }

  render() {
    const change = 5;
    return (
      <div className="converter">
        <TempValue label={CELCIUS}>
          <button
            type="button"
            onClick={e =>
              this.setState({
                temp:
                  this.state.temp -
                  change
              })
            }
          >
            -{change}
          </button>
          {this.state.temp}
          <button
            type="button"
            onClick={e =>
              this.setState({
                temp:
                  this.state.temp +
                  change
              })
            }
          >
            +{change}
          </button>
        </TempValue>
        <TempValue label={FAHRENHEIT}>
          {convert(
            CELCIUS,
            this.state.temp
          )}
        </TempValue>
      </div>
    );
  }
}
