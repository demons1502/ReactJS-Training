import React, { createRef } from 'react';

type myProps = {};

class TimerSound extends React.Component<myProps> {
  audioRef: React.RefObject<HTMLAudioElement>;

  constructor(props: myProps) {
    super(props);
    this.handleTimerEnded = this.handleTimerEnded.bind(this);
    this.audioRef = React.createRef<HTMLAudioElement>();
  }
  handleTimerEnded() {
    this.audioRef.current?.play();
  }
  componentDidMount() {
    window.addEventListener('timerEnded', this.handleTimerEnded);
  }
  render() {
    return (
      <audio
        ref={this.audioRef}
        src='flute_c_long_01.wav'
        preload='auto'
      ></audio>
    );
  }
}

export { TimerSound };
