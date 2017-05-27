import React, {Component} from 'react'
// import logo from './logo.svg'
import './App.css'
import Comment from './Comment'
import Clock from './Clock/index'
import {comment} from './data'

class App extends Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }

  render() {
    return(
      <div>
        <Clock date={new Date()}/>
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
