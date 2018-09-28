import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import fireConfig from '../auth'
import stage1 from '../elements/images/stages/burners.jpg'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

var {height, width} = Dimensions.get('window');
var vehicleWidth = width - 100;

const firebaseApp = firebase.initializeApp(firebaseConfig);

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class Battle extends React.Component {
  constructor(){
    super()

    this.state = {
      vehicles : {
        left:0
      }
    }
  }

  _onTurnEnded(){

  }

  _vehicleUI(){
    return(<View style={{width:vehicleWidth}}></View>)
  }
  render() {
    return (
      <ImageBackground source={stage1} style={styles.container}>
        <View style={{flex:3}}>
        </View>
        <View style={{flex:1}}></View>
        <View style={{flex:3}}></View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    justifyContent:'center',
    alignItems:'center'
  },
});
