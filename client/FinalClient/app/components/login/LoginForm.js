import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class LoginForm extends Component {
  state = {
    text: ""
  }

  render() {
    return (
      <View style = {{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 100
      }}>
        <TextInput
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        placeholder="Email" placeholderTextColor="rgba(255, 255, 255, 0.5)"
        style = {{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: 'white',
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          borderRadius: 5
        }}/>
        <TextInput
        placeholder="Password" placeholderTextColor="rgba(255, 255, 255, 0.5)"
        style = {{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: 'white',
          marginBottom: 10,
          marginLeft: 10,
          marginRight: 10,
          padding: 10,
          borderRadius: 5
        }}/>
      </View>
    )
  }
}
  // const styles = StyleSheet.create({
  //   inputs: {
  //     backgroundColor: "rgba(0, 0, 0, 0.3)",
  //     color: 'white',
  //     marginBottom: 10,
  //     marginLeft: 10,
  //     marginRight: 10,
  //     padding: 10,
  //     borderRadius: 5
  //   },
  //   container: {
  //     flex: 1,
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     // backgroundColor: 'blue',
  //     marginBottom: 100,
  //   },
  // })

export default LoginForm
