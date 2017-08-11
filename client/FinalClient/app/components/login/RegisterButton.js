import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const RegisterButton = ({ onSelect=f=>f }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <View style={styles.link}>
        <Text style={styles.text}>Register</Text>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "rgba(255, 255, 255, 0)",
    marginBottom: 10
  },
  container: {
    flexDirection: "row",
    // backgroundColor: "yellow"
  },
  link: {
    flex: 1,
    padding: 5,
    justifyContent: "center",
    alignItems: "center"
  },
})

export default RegisterButton
