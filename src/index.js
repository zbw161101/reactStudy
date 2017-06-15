import React from 'react'
// import ReactDOM, {render} from 'react-dom'
import {render} from 'react-dom'
// import App from './App'
import AuthExample from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

// render(<App name="app"/>, document.getElementById('root'))
render(<AuthExample name="app"/>, document.getElementById('root'))
registerServiceWorker()
