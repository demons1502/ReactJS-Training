import React, { Component } from 'react';

type myProps = {};

type myState = {
  currentTime: Date;
  counter: number;
};

class Clock extends Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = {
      currentTime: new Date(),
      counter: 0,
    };
  }

  componentDidMount(): void {
    console.log('componentDidMount is triggered');
  }

  shouldComponentUpdate(
    nextProps: Readonly<myProps>,
    nextState: Readonly<myState>,
    nextContext: any
  ): boolean {
    console.log('shouldComponentUpdate is triggered');
    console.log('new props: ', nextProps);
    console.log('new state: ', nextState);
    return true;
  }

  componentWillUpdate(
    nextProps: Readonly<myProps>,
    nextState: Readonly<myState>,
    nextContext: any
  ): void {
    console.log('componentWillUpdate is triggered');
    console.log('new props: ', nextProps);
    console.log('new state: ', nextState);
  }

  componentDidUpdate(
    prevProps: Readonly<myProps>,
    prevState: Readonly<myState>,
    snapshot?: any
  ): void {
    console.log('componentDidUpdate is triggered');
    console.log('new props: ', prevProps);
    console.log('old props: ', prevState);
  }

  componentWillUnmount(): void {
    console.log('Component will unmount');
  }

  launchClock() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log('rendering');

    if (this.state.counter > 2) return;

    return (
      <div style={{ cursor: 'pointer' }}>
        <h2>It is {this.state.counter}</h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Increase
        </button>
      </div>
    );
  }
}

export default Clock;
