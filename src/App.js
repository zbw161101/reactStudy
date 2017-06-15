import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  // Link,
  Redirect,
  // withRouter,
  // MemoryRouter
} from 'react-router-dom'

const home = () => <div>home</div>
const repos = () => <div>repos</div>
const about = () => <div>about</div>
const supportsHistory = 'pushState' in window.history
const AuthExample = () => (
  <Router forceRefresh={!supportsHistory}>
    <div>
      <li><NavLink to="/">home</NavLink></li>
      <li><NavLink to="repos">repos</NavLink></li>
      <li><NavLink to="about">about</NavLink></li>
      <Route exact path="/" render={() => (
        <Redirect to="/repos"/>
      )}/>
      <Route exact path="/" component={home}/>
      <Route path="/repos" component={repos}/>
      <Route path="/about" component={about}/>
    </div>
  </Router>
)

export default AuthExample