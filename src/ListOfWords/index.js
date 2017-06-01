/**
 * Created by ZhaoBoWen on 2017/5/31.
 */
import React from 'react'

class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

export default class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
    this.test = this.test()
    this.st = {
      background: 'red'
    }
  }

  test() {
    function* generator() {
      while (true) {
        yield true
        yield false
      }
    }

    return generator()
  }

  handleClick() {
    // This section is bad style and causes a bug
    // const words = this.state.words;
    // words.push('marklar');
    if (this.test.next().value) {
      this.setState({words: [...this.state.words, 'marklar']});
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} style={this.st}/>
        <ListOfWords words={this.state.words}/>
      </div>
    );
  }
}