import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class Curve extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to The Battle View!</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
