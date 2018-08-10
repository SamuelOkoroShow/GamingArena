import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import characters from '../elements/characters'

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Character Selection!</Text>
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
