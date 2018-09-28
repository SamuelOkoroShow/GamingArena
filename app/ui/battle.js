import React from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import fireConfig from '../auth'
import stage1 from '../elements/images/stages/burners.jpg'
import colors from '../math/bit_map/colors'
import avatar from '../elements/cookies/tempAi'

// Initialize Firebase
const firebaseConfig = {
  apiKey: fireConfig.apiKey,
  authDomain: fireConfig.authDomain,
  databaseURL: fireConfig.databaseURL,
  storageBucket: fireConfig.storageBucket,
};

var {height, width} = Dimensions.get('window');
var vehicleWidth = width - 80;
var vehicleHeight = height/2 - (height/7);

const firebaseApp = firebase.initializeApp(firebaseConfig);

//This could potentially contain a lot of state data and logic methodology
// We're going to try to keep this as clean as possible 

export default class BattleArena extends React.Component {
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

  _vehicleUIRival(){
    return(<View style={{width:vehicleWidth, borderRadius:5, height:vehicleHeight, margin:5, backgroundColor:colors[1]}}></View>)
  }

  _vehicleUIMe(){
    return(<View style={{width:vehicleWidth, borderRadius:5, alignSelf:'flex-end', margin:5, height:vehicleHeight, backgroundColor:colors[1]}}></View>)
  }


  render() {
    return (
      <ImageBackground source={stage1} style={styles.container}>
        <View style={{height:25}} />
        <View style={{flex:3}}>
        {this._vehicleUIRival()}
        </View>
        <View style={{flex:1}}></View>
        <View style={{flex:3, justifyContent:'flex-end'}}>
        {this._vehicleUIMe()}
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,

  },
});
