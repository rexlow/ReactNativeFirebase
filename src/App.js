import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import firebase from 'firebase';

import Header from './components/Header';
import Button from './components/Button';
import Card from './components/Card';
import CardSection from './components/CardSection';
import LoginForm from './components/LoginForm';
import Spinner from './components/Spinner';

class App extends Component {
  state = {loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      //define firebase config here
      apiKey: "AIzaSyDLthtViPsRw2je3PByFMnL1-yfeuJy3kE",
      authDomain: "authentication-86718.firebaseapp.com",
      databaseURL: "https://authentication-86718.firebaseio.com",
      storageBucket: "authentication-86718.appspot.com",
      messagingSenderId: "691068630838"
    });

    //handle user authentication activity
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Sign Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <View>
          {this.renderContent()}
        </View>
      </View>
    )
  }
}

export default App;
