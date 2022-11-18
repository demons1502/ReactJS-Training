import React, { Component, SyntheticEvent } from 'react';

type myProps = {};

type myState = {
  currentTime: Date;
  counter: number;
  timerID?: number;
};

class Clock extends Component<myProps, myState> {
  timerID?: number;

  constructor(props: myProps) {
    super(props);
    this.state = {
      currentTime: new Date(),
      counter: 0,
    };
  }

  componentDidMount(): void {
    console.log('componentDidMount is triggered');
    this.timerID = setInterval(() => this.launchClock(), 1000);
    console.log(this.timerID);
  }

  componentWillUnmount(): void {
    console.log('Component will unmount');
    clearInterval(this.timerID);
    console.log(this.timerID);
  }

  handleIncrease = (e: SyntheticEvent) => {
    this.setState((prevState) => ({
      ...prevState,
      counter: this.state.counter + 1,
    }));
    console.log(this, e);
  };

  launchClock() {
    this.setState({
      currentTime: new Date(),
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <h2>It is {this.state.counter}</h2>
        <h3>{this.state.currentTime.toLocaleString()}</h3>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={() => clearInterval(this.timerID)}>
          Clear interval
        </button>
      </div>
    );
  }
}

export default Clock;
