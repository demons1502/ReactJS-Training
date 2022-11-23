import React, { BaseSyntheticEvent } from 'react';

type myProps = {
  startTimer: Function;
  time: string;
};

class Button extends React.Component<myProps> {
  startTimer(event: BaseSyntheticEvent) {
    return this.props.startTimer(this.props.time);
  }

  render() {
    return (
      <button
        type='button'
        className='btn-default btn'
        onClick={() => {
          this.props.startTimer(this.props.time, this.props.time);
        }}
      >
        {+this.props.time / 60} minutes
      </button>
    );
  }
}

export { Button };
