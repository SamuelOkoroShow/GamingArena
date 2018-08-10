import React from 'react';
import { StyleSheet, Text, View,  Navigator } from 'react-native';

export default class Tutorial extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>This is the Tutorial View</Text>
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
