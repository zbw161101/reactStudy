import React, {Component} from 'react'
// import logo from './logo.svg'
import './App.css'
import listItems from './listItems'
import LoginControl from './isLogoin'
import Clock from './Clock'
import Toggle from './Toggle'
import Comment from './Comment'

import {comment} from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <ul>
          <listItems />
        </ul>
        <LoginControl/>
        <Clock/>
        <Toggle/>
        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author}
        />
      </div>
    )
  }
}

export default App
