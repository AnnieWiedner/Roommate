import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';


export default class Login extends Component {

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
        <View>
          <LoginHeader />
          <LoginForm />
          <LoginButton onSelect={() => Alert.alert('Login Button clicked')}/>
          <RegisterButton onSelect={() => Alert.alert('Register Button clicked')}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column'
  },
})
