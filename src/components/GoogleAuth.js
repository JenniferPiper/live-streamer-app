import React from 'react';

class GoogleAuth extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    isSignedIn: null,
  }
  // this.handleSignIn = this.handleSignIn.bind(this);
  // this.handleSignOut = this.handleSignOut.bind(this);
 // this.setSignedInState = this.setSignedInState.bind(this);
  }
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
        scope: 'email'
      })
      .then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setSignedInState();

      });
    });
  }


  // with this syntax, we must explicitly bind 'this' to the component:
  // handleSignIn() {

  // with arrow function syntax, this method's context is bound to the component automatically:

  handleSignIn = () => {
    this.auth.signIn()
    .then(this.setSignedInState);
  }

  handleSignOut = () => {
    this.auth.signOut()
    .then(this.setSignedInState);
  }

  setSignedInState = () => {

    // my less concise conditional syntax:
   // const googleUserIsSignedIn = this.auth.isSignedIn.get();
   // googleUserIsSignedIn ? this.setState({isSignedIn: true}) : this.setState({isSignedIn: false});

   // tutorial's syntax: 
   this.setState({ isSignedIn: this.auth.isSignedIn.get()});

   console.log('this.state.IsSignedIn: ', this.state.isSignedIn);
  }

  render() {
    const signedOutJSX = (
      <div>
      <p className='user-message'>You are signed out.</p>
      <button className='ui red google button' onClick={this.handleSignIn}><i className='google icon' />Sign In</button>
      </div>
      );
    const signedInJSX = (
      <div>
    <p className='user-message'>You are signed in.</p>
    <button className='ui red google button' onClick={this.handleSignOut}>
    <i className='google icon' />Sign Out</button>
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
