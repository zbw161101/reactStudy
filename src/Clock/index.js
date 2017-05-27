/**
 * Created by ZhaoBoWen on 2017/5/27.
 */
import React, {Component} from 'react'

export default class Clock extends Component {
  constructor() {
    super()
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {

  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div id="clock1">
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
