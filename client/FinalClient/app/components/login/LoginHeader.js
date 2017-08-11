import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Room & Board
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    fontSize: 24,
    textAlign: 'center',
    margin: 5,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontWeight: '700',
    color: 'white'
  },
  container: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
  },
})

export default LoginHeader
