import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Login from './components/login/Login';


export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBMCMQtsLKK8NUgUYd_ph7YBYS72n59dmI',
      authDomain: 'authentication-760d5.firebaseapp.com',
      databaseURL: 'https://authentication-760d5.firebaseio.com',
      projectId: 'authentication-760d5',
      storageBucket: 'authentication-760d5.appspot.com',
      messagingSenderId: '632711511561'
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      pendingLoginRequest: false
    }
  }

  render() {
    return (
        <Login />
        // <Navigator
        //   initialRoute={{ name: 'Login Page' }}
        //   renderScene={(route, navigator) => {
        //     switch (route.name) {
        //       case 'Register Page'
        //         return <Register />
        //       default:
        //         return <Login />
        //     }
        //   }}/>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: null,
    height: null
  }
});

AppRegistry.registerComponent('FinalClient', () => App);
