import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class CharacterSelection extends React.Component {
  // Do we want characters displayed in a listView? lets hace an indie view for now
  eachCharacter(){

  }
  render() {
    return (
      <View style={styles.container}>
        <View>
        </View>
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
