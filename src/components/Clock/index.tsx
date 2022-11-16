import React, { Component } from 'react';

type myProps = {};

type myState = {
  date: Date;
};

class Counter extends Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.launchClock();
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating');
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }

  render() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <h2>It is {this.state.date.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Counter;
