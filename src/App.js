import React, {Component} from 'react'
// import logo from './logo.svg'
import './App.css'
import Welcome from './my-demo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }

  render() {
    return(
      <div className="shopping-list">
        <Welcome name="Sara"/>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>{this.state.num}</li>
          <li onClick={() => {this.setState({num: +1})}}>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }//this.setState({value: 'X'}
}

export default App
