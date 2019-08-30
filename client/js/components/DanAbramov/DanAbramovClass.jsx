import React from "react";

export default class DanAbramovClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Harry",
      lastName: "Potter"
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;

    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = `${this.state.firstName} ${this.state.lastName}`;
  }

  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  render() {
    const { firstName, lastName, windowWidth } = this.state;

    return (
      <div>
        <label>
          <div>First Name</div>
          <input
            type="text"
            value={firstName}
            onChange={this.handleFirstNameChange}
          />
        </label>
        <label>
          <div>Last Name</div>
          <input
            type="text"
            value={lastName}
            onChange={this.handleLastNameChange}
          />
        </label>
        <label>
          <div>Window Width</div>
          {windowWidth}
        </label>
      </div>
    );
  }
}
