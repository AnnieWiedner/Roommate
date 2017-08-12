import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
} from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Login from './app/components/login/Login';
import Register from './app/components/register/Register';


export default class App extends Component {

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
        <Register />
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
