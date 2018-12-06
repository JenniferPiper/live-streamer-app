import React from 'react';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    isSignedIn: false,
  }
  this.handleSignIn = this.handleSignIn.bind(this);
  this.handleSignOut = this.handleSignOut.bind(this);
  this.setSignedInState = this.setSignedInState.bind(this);
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '14273261262-0k34tp16u7lqgdhfro8q1ptjoi9it1oo.apps.googleusercontent.com',
        scope: 'email'
      })
      .then(() => this.setSignedInState());
    });
  }

  handleSignIn() {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signIn()
    .then(() => this.setSignedInState());
  }

  handleSignOut() {
    const auth = window.gapi.auth2.getAuthInstance();
    auth.signOut()
    .then(() => this.setSignedInState());
  }

  setSignedInState() {
    const auth = window.gapi.auth2.getAuthInstance();
    const googleUserIsSignedIn = auth.isSignedIn.get();
    console.log('googleUserIsSignedIn: ', googleUserIsSignedIn);

    googleUserIsSignedIn ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false});
  }

  render() {
    const signedOutJSX = (
      <div>
      <p className='user-message'>You are signed out.</p>
      <button onClick={this.handleSignIn}>Sign In</button>
      </div>
      );
    const signedInJSX = (
      <div>
    <p className='user-message'>You are signed in.</p>
    <button onClick={this.handleSignOut}>Sign Out</button>
    </div>
    );
    return (
    <div>Google Auth
      {this.state.isSignedIn ? signedInJSX : signedOutJSX }
    </div>
    )
  }
}

export default GoogleAuth;
