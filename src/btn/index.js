/**
 * Created by ZhaoBoWen on 2017/5/31.
 */
import React from 'react'

export default class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

// export default class CounterButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 1};
//   }
//
//   shouldComponentUpdate(nextProps, nextState) {
//     if (this.props.color !== nextProps.color) {
//       return true;
//     }
//     if (this.state.count !== nextState.count) {
//       return true;
//     }
//     return false;
//   }
//
//   render() {
//     return (
//       <button
//         color={this.props.color}
//         onClick={() => this.setState(state => ({count: state.count + 1}))}>
//         Count: {this.state.count}
//       </button>
//     );
//   }
// }