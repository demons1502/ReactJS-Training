import React, { Component } from 'react';

type myProps = typeof Button.defaultProps & {
  title: string;
};

type myState = {};

class Button extends Component<myProps, myState> {
  static defaultProps = {
    title: 'Hello',
  };

  constructor(props: myProps) {
    super(props);
  }

  render() {
    return <button>{this.props.title}</button>;
  }
}

export default Button;
