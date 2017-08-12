import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RegisterHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Room & Board
      </Text>
      <Text style={styles.description}>
        Register
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontWeight: '700',
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
   },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    backgroundColor: "rgba(0, 0, 0, 0)"
  }
})

export default RegisterHeader
