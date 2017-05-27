/**
 * Created by ZhaoBoWen on 2017/5/27.
 */
import React from 'react'

function Greeting({isLoggedIn}) {
  if (isLoggedIn) {
    return <div>isLoggedIn</div>;
  }
  return <div>no</div>;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false, unreadMessages: []};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}/>;
    } else {
      button = <LoginButton onClick={this.handleLoginClick}/>;
    }

    return (
      <div>
        {this.state.unreadMessages.length > 0 &&
        <h2>
          You have {this.state.unreadMessages.length} unread messages.
        </h2>
        }
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    );
  }
}
