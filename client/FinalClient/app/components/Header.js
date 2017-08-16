import React from 'react';
import { Text, View, StyleSheet } from 'react-native';




const Header = (props) => {
  <View style={styles.container}>
    <Text style={styles.name}>Room & Board</Text>
    <Text style={styles.description}>{props.headerText}</Text>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
   },
  name: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontWeight: '700',
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
})

export default Header;
