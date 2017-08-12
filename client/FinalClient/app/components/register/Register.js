import React, { Component } from 'react';
import { StyleSheet, View, Alert, Navigator, Text, Image } from 'react-native';
import picBedroom from '../../../images/homepageImg.png';
import RegisterHeader from './RegisterHeader';
import RegisterForm from './RegisterForm';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';



export default class Register extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      username: "",
      password: "",
      address: "",
      pendingRegisterRequest: false
    }
  }

  render() {
    return (
      <Image source={picBedroom} style={styles.backgroundImage}>
      <View style={styles.container}>
          <RegisterHeader />
          <RegisterForm />
          <RegisterButton onSelect={() => Alert.alert('Register Button clicked')}/>
          <LoginButton onSelect={() => Alert.alert('Login Button clicked')}/>
      </View>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column'
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: null,
    height: null
  }
})
