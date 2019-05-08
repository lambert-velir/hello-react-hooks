import React from "react";
import { number, string } from "prop-types";

export default class Truncate extends React.Component {
  static propTypes = {
    text: string.isRequired,
    maxLength: number
  };

  static defaultProps = {
    maxLength: 32
  };

  state = {
    isHidden: false
  };

  render = () => {
    const { text, maxLength } = this.props;
    const { isHidden } = this.state;

    return (
      <span>
        {isHidden ? text.substr(0, maxLength) : text}
        {isHidden && text.length > maxLength ? (
          <button
            type="button"
            onClick={() => this.setState({ isHidden: false })}
          >
            show more
          </button>
        ) : (
          <button
            type="button"
            onClick={() => this.setState({ isHidden: true })}
          >
            show less
          </button>
        )}
      </span>
    );
  };
}
