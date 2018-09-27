import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import fireConfig from '../auth'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class Battle extends React.Component {

  _onTurnEnded(){

  }
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
