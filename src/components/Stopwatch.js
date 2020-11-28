import React, { Component } from 'react';
import { formatTimer } from '../utils.js';
import Button from './Button.js';
import LapTime from './LapTime.js';

export class Stopwatch extends Component {
  state = { timer: 0, isActive: false, isPaused: false, laps: [] };

  start = () => {
    if (this.state.isActive) return;
    this.setState({ isActive: true });
    this.intervalId = setInterval(
      () => this.setState({ timer: this.state.timer + 1 }),
      10
    );
  };

  pause = () => {
    this.setState({ isActive: false, isPaused: true });
    clearInterval(this.intervalId);
  };

  lap = () => {
    if (!this.state.isActive) return;
    const lapTime = this.state.timer;
    const newLap = formatTimer(lapTime);
    const newArr = this.state.laps;
    newArr.push(newLap);
    this.setState({ laps: newArr });
  };

  reset = () => {
    this.setState({ timer: 0, isActive: false, isPaused: false, laps: [] });
  };

  render() {
    return (
      <div className="center">
        <div className="timer">
          <h1 className="text-danger">{formatTimer(this.state.timer)}</h1>
        </div>

        <div className="btn-control">
          <Button onClick={this.start} name="Run" />
          <Button onClick={this.pause} name="Pause" />
          <Button onClick={this.lap} name="Lap" />
          <Button onClick={this.reset} name="Reset" />
        </div>

        <div className="center  m-3">
          <ul className="list-group">
            {this.state.laps.map((lap, index) => {
              return <LapTime lap={lap} index={index} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
