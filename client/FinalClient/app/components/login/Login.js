import React, { Component } from 'react';
import { StyleSheet, View, Alert, Navigator, Image } from 'react-native';
import LoginForm from './LoginForm';
import LoginHeader from './LoginHeader';
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';
import picBedroom from '../../../images/homepageImg.png';



const Login = () => {


    return (
      <Image source={picBedroom} style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        width: null,
        height: null
      }}>
      <View style={{
        flex: 1,
        width: null,
        height: null,
        flexDirection: 'column'
      }}>
          <LoginHeader />
          <LoginForm />
          <LoginButton onSelect={() => Alert.alert('Login Button clicked')}/>
          <RegisterButton onSelect={() => Alert.alert('Register Button clicked')}/>
      </View>
      </Image>
    )

    // const styles = StyleSheet.create({
    //   container: {
    //     flex: 1,
    //     width: null,
    //     height: null,
    //     flexDirection: 'column'
    //   },
    //   backgroundImage: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    //     width: null,
    //     height: null
    //   }
    // })

}


export default Login;
