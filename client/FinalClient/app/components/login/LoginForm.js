import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputs} placeholder="Username" placeholderTextColor="rgba(255, 255, 255, 0.5)"/>
      <TextInput style={styles.inputs} placeholder="Password" placeholderTextColor="rgba(255, 255, 255, 0.5)"/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: 'white',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 5
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'blue'
  },
})

export default LoginForm
