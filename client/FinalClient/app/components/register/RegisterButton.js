import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';


const RegisterButton = ({ onSelect=f=>f }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button
        title="Register"
        onPress={onSelect}
        buttonStyle={{backgroundColor:"#F3623C", borderRadius:10}}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    marginBottom: 10,
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 5,
  },
})

export default RegisterButton
