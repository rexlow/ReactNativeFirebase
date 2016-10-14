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

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDLthtViPsRw2je3PByFMnL1-yfeuJy3kE",
      authDomain: "authentication-86718.firebaseapp.com",
      databaseURL: "https://authentication-86718.firebaseio.com",
      storageBucket: "authentication-86718.appspot.com",
      messagingSenderId: "691068630838"
    });
  }
  render() {
    return(
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;
