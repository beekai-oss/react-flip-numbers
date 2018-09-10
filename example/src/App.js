import React, { Component } from "react";
import FlipNumbers from "react-flip-numbers";

class App extends Component {
  state = {
    timeRemaining: 10000,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <FlipNumbers
            play
            color="#fff"
            background="#333333"
            width={50}
            height={50}
            numbers={`${this.state.timeRemaining}`}
          />
        </div>
      </div>
    );
  }
}

export default App;
