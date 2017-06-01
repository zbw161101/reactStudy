import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css'
import WordAdder from './ListOfWords'
import CounterButton from './btn'
import CustomTextInput from './Refs'
import Calculator from './stateUp'
import {NameForm} from './forms'
import {NumberList} from './listItems'
import LoginControl from './isLogoin'
import Clock from './Clock'
import Toggle from './Toggle'
import Comment from './Comment'

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/WordAdder">WordAdder</Link></li>
        <li><Link to="/CounterButton">CounterButton</Link></li>
        <li><Link to="/CustomTextInput">CustomTextInput</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/NameForm">NameForm</Link></li>
        <li><Link to="/NumberList">NumberList</Link></li>
        <li><Link to="/LoginControl">LoginControl</Link></li>
        <li><Link to="/Clock">Clock</Link></li>
        <li><Link to="/Toggle">Toggle</Link></li>
      </ul>

      <hr/>

      <Route path="/:id" component={Child}/>

      <hr/>

      <Route exact path="/WordAdder" component={WordAdder}/>
      <Route path="/CounterButton" component={CounterButton}/>
      <Route path="/CustomTextInput" component={CustomTextInput}/>
      <Route path="/Calculator" component={Calculator}/>
      <Route path="/NameForm" component={NameForm}/>
      <Route path="/NumberList" component={NumberList}/>
      <Route path="/LoginControl" component={LoginControl}/>
      <Route path="/Clock" component={Clock}/>
      <Route path="/Toggle" component={Toggle}/>
      <Route path="/Comment" component={Comment}/>
    </div>
  </Router>
)

export default BasicExample


// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
//
// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )