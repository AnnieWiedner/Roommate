import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import picBedroom from './images/try-again.png';
import Login from './app/components/login/Login';




export default class App extends Component {

  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      pendingLoginRequest: false
    }
  }

  render() {
    return (
      <Image source={picBedroom} style={styles.imageContainer}>
        <Login />
      </Image>
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
